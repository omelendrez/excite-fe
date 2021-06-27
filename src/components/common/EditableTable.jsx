import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Popconfirm,
  Form,
  Typography,
  Button,
  Space,
  Divider,
} from "antd";
import InputField from "./InputField";
import { formatAmount, getSelectList, cleanFields } from "utils/helpers";
import { addItem, updateItem } from "redux/actions";
import AddButton from "./AddButton";
import "./editableTable.scss";

const handleKey = (e) => {
  const inputs = document.getElementsByTagName("input");

  let increment = 0;

  switch (e.code) {
    case "NumpadEnter":
      increment = 1;
      break;
    default:
      return;
  }
  let curIndex = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === e.target) {
      curIndex = i;
      break;
    }
  }
  if (curIndex >= 0 && curIndex < inputs.length - 1) {
    inputs[curIndex + increment].focus();
  }
};

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  optionsModels,
  options,
  ...restProps
}) => {
  const fieldProps = {
    type: inputType,
    name: dataIndex,
    key: dataIndex,
    rules: [
      {
        required: true,
        message: `Debe ingresar ${title}!`,
      },
    ],
    options,
  };
  return (
    <td {...restProps}>
      {editing ? (
        <InputField
          field={fieldProps}
          handleKey={handleKey}
          optionsModels={optionsModels}
        />
      ) : (
        children
      )}
    </td>
  );
};

const fields = [
  {
    name: "REMNUM",
    title: "Número de remito",
    type: "number",
    readonly: true,
  },
  {
    name: "PRODCOD",
    title: "Producto",
    type: "select",
    options: "productos",
    updater: true,
  },
  {
    name: "REMCAN",
    title: "Cantidad",
    type: "number",
  },
  {
    name: "REMPRE",
    title: "Precio",
    type: "amount",
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

const EditableTable = (props) => {
  const { dataSource, rowKey, handleDelete } = props;
  const [form] = Form.useForm();
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState("");
  const productos = useSelector((state) => state.productos);
  const { record: remito } = useSelector((state) => state.remitos);
  const dispatch = useDispatch();

  const isEditing = (record) => record.ID === editingKey;

  const edit = (record) => {
    form.setFieldsValue(record);
    setEditingKey(record.ID);
  };

  const cancel = () => {
    const newData = data.filter((d) => d.ID !== 0);
    setData(newData);
    setEditingKey("");
  };

  useEffect(() => {
    const inputs = document.getElementsByTagName("input");
    if (inputs.length) inputs[0].focus();
  }, [editingKey]);

  const save = async (id, remito) => {
    const row = await form.validateFields();
    row["ID"] = id;
    row["REMNUM"] = remito;
    const newValues = cleanFields(fields, row);
    if (!row.ID) {
      return dispatch(addItem(newValues));
    }
    dispatch(updateItem(newValues));
  };

  const handleAdd = () => {
    const row = {};
    fields.forEach(
      (column) =>
        (row[column.name] = "number-amount".includes(column.type) ? 0 : "")
    );
    row["REMNUM"] = remito.REMNUM;
    const newData = [...data, row];
    setEditingKey(0);
    setData(newData);
  };

  const columns = [
    {
      dataIndex: "PRODCOD",
      title: "Producto",
      inputType: "select",
      options: "productos",
      updater: false,
      editable: true,
      optionsModels: {
        productos: getSelectList("productos", productos.records),
      },
      width: 80,
    },
    {
      dataIndex: "PRODDES",
      title: "Descripción",
      hideOnEdit: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "REMCAN",
      title: "Cantidad",
      inputType: "number",
      editable: true,
      align: "center",
      width: 80,
    },
    {
      dataIndex: "REMPRE",
      title: "Precio",
      inputType: "amount",
      render: (text, _) => formatAmount(text),
      editable: true,
      align: "right",
      width: 120,
    },
    {
      dataIndex: "REMTOT",
      title: "Total",
      render: (_, record) => formatAmount(record.REMCAN * record.REMPRE),
      align: "right",
      width: 120,
    },
    {
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <input
              type="button"
              onClick={() => save(record.ID, record.REMNUM)}
              className="ant-btn-link"
              style={{
                marginRight: 8,
              }}
              value="Guardar"
            />
            <Popconfirm
              title={
                record.ID === 0
                  ? "Cancela agregar registro?"
                  : "Cancela modificación?"
              }
              onConfirm={cancel}
              okText="Si"
              cancelText="No"
            >
              <Button type="link">Cancelar</Button>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Modificar
            </Typography.Link>
            <Popconfirm
              title="Confirma eliminar registro?"
              onConfirm={() => handleDelete(record)}
              okText="Si"
              cancelText="No"
              okType="danger"
            >
              <Button type="link" disabled={editingKey !== ""}>
                Eliminar
              </Button>
            </Popconfirm>
          </span>
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
        optionsModels: col.optionsModels,
        options: col.options,
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
        pagination={false}
        rowKey={rowKey}
        size="small"
        tableLayout="fixed"
      />
      <Divider />
      <Space>
        <AddButton onAdd={handleAdd} disabled={editingKey !== ""} />
      </Space>
    </Form>
  );
};

export default EditableTable;
