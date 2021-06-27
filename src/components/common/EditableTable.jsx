/**
 * This table solves a specific problem but it has to be refactored to make it more generic
 */
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
  Modal as AntdModal,
} from "antd";
import InputField from "./InputField";
import Modal from "./Modal";
import { formatAmount, getSelectList, cleanFields } from "utils/helpers";
import { addItem, updateItem } from "redux/actions";
import AddButton from "./AddButton";
import EditableCell from "./EditableCell";
import "./editableTable.scss";

const EditableTable = (props) => {
  const { dataSource, rowKey, handleDelete } = props;
  const [form] = Form.useForm();
  const [searchForm] = Form.useForm();
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const productos = useSelector((state) => state.productos);
  const { record: remito } = useSelector((state) => state.remitos);
  const { records: clientes } = useSelector((state) => state.clientes);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectedValue = (value) => setSelectedValue(value);

  const onOk = () => {
    if (!selectedValue) return;
    const value = selectedValue;
    const producto = productos.records.find(
      (producto) => producto.PRODCOD === value
    );
    let price = producto.PRODPRE;
    const tipo =
      (clientes.tipos &&
        clientes.tipos.find((tipo) => tipo.TIPCOD === producto.TIPCOD)) ||
      null;
    if (tipo) {
      price = tipo.CLIPRODPRE;
    }

    if (price === 0) {
      const errorAlert = AntdModal.error();
      errorAlert.update({
        title: "Producto sin precio",
        content: "Atención, el producto seleccionado no tiene precio asignado",
      });
    }

    form.setFields([{ name: "PRODCOD", value }]);
    form.setFields([{ name: "REMPRE", value: price }]);

    setIsModalVisible(false);
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
      optionsModels: {
        productos: getSelectList("productos", productos.records),
      },
      getSelectedValue: handleSelectedValue,
      rules: [{ required: true }],
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

  const onCancelModal = () => {
    setIsModalVisible(false);
  };

  const handleModal = () => {
    setIsModalVisible(true);
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
      editable: true,
      width: 100,
      handleModal,
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
      onCell: (record) => {
        return {
          record,
          inputType: col.inputType,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
          handleModal: col.handleModal,
        };
      },
    };
  });

  const field = fields.find((f) => f.name === "PRODCOD");

  return (
    <>
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
      <Modal
        title="Buscar producto"
        isModalVisible={isModalVisible}
        onClose={onCancelModal}
        onOk={onOk}
      >
        <Form form={searchForm}>
          <InputField
            field={field}
            optionsModels={field.optionsModels}
            defaultOpen
          />
        </Form>
      </Modal>
    </>
  );
};

export default EditableTable;
