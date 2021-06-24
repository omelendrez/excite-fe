import React, { useState } from "react";
import { Table, Popconfirm, Form, Typography, Button } from "antd";
import InputField from "./InputField";
import { formatAmount } from "utils/helpers";
import "./editableTable.scss";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  width,
  record,
  index,
  children,
  ...restProps
}) => {
  const fieldProps = {
    type: inputType,
    name: dataIndex,
    width,
    rules: [
      {
        required: true,
        message: `Debe ingresar ${title}!`,
      },
    ],
  };
  return (
    <td {...restProps}>
      {editing ? <InputField key={dataIndex} field={fieldProps} /> : children}
    </td>
  );
};

const EditableTable = (props) => {
  const { dataSource, rowKey } = props;
  const [form] = Form.useForm();
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue(record);
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      dataIndex: "PRODCOD",
      title: "Producto",
      inputType: "select",
      options: "productos",
      updater: true,
      editable: true,
      width: 200,
    },
    {
      dataIndex: "REMCAN",
      title: "Cantidad",
      inputType: "number",
      editable: true,
    },
    {
      dataIndex: "REMPRE",
      title: "Precio",
      inputType: "amount",
      editable: true,
    },
    {
      dataIndex: "REMTOT",
      title: "Total",
      render: (text, record) => formatAmount(record.REMCAN * record.REMPRE),
      align: "right",
      width: 120,
    },
    {
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              type="link"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Guardar
            </Button>
            <Popconfirm title="Cancela modiciación?" onConfirm={cancel}>
              <Button type="link">Cancelar</Button>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Modificar
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        rowKey={rowKey}
      />
    </Form>
  );
};

export default EditableTable;
