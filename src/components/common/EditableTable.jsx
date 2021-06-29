/**
 * This table solves a specific problem but it has to be refactored to make it more generic
 */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Form, Space, Divider, Modal as AntdModal } from "antd";
import InputField from "./InputField";
import Modal from "./Modal";
import { formatAmount, cleanFields } from "utils/helpers";
import { addItem, updateItem } from "redux/actions";
import AddButton from "./AddButton";
import EditableCell from "./EditableCell";
import TableSummary from "./TableSummary";
import "./editableTable.scss";

const EditableTable = (props) => {
  const { dataSource, rowKey, handleDelete, fields, columns } = props;
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

  const fieldsList = fields({ productos, handleSelectedValue });

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
    const newValues = cleanFields(fieldsList, row);
    if (!row.ID) {
      return dispatch(addItem(newValues));
    }
    dispatch(updateItem(newValues));
  };

  const handleAdd = () => {
    const row = {};
    fieldsList.forEach(
      (column) =>
        (row[column.name] = "number-amount".includes(column.type) ? 0 : "")
    );
    row["REMNUM"] = remito.REMNUM;
    const newData = [...data, row];
    setEditingKey(0);
    setData(newData);
  };

  const mergedColumns = columns({
    save,
    edit,
    handleDelete,
    handleModal,
    isEditing,
    cancel,
    editingKey,
  }).map((col) => {
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

  const field = fieldsList.find((f) => f.name === "PRODCOD");

  const totalAmount = data.reduce(
    (acc, cur) => acc + cur.REMCAN * cur.REMPRE,
    0
  );

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
          summary={() => (
            <TableSummary total={formatAmount(totalAmount)} colSpan={4} />
          )}
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
