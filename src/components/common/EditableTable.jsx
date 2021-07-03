/**
 * This table solves a specific problem but it has to be refactored to make it more generic
 */
import React, { useEffect, useState, useRef } from "react";
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
  const { dataSource, rowKey, handleDelete, fields, columns, loading } = props;
  const form = useRef(null);
  const searchForm = useRef(null);
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const productos = useSelector((state) => state.productos);
  const { record: remito } = useSelector((state) => state.remitos);
  const { records: clientes } = useSelector((state) => state.clientes);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectedValue = (value) => setSelectedValue(value);

  const fieldsList = fields({ productos, handleSelectedValue });

  useEffect(() => {
    const inputs = document.getElementsByTagName("input");
    if (inputs.length) inputs[0].focus();
  }, [editingKey]);

  useEffect(() => {
    setData(dataSource);
    setEditingKey(null);
  }, [dataSource, loading]);

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

    if (form.current) {
      form.current.setFields([{ name: "PRODCOD", value }]);
      form.current.setFields([{ name: "REMPRE", value: price }]);
    }

    setIsModalVisible(false);
  };

  const isEditing = (record) => record.ID === editingKey;

  const edit = (record) => {
    if (form.current) {
      form.current.setFieldsValue(record);
      setEditingKey(record.ID);
    }
  };

  const cancel = () => {
    const newData = data.filter((d) => d.ID !== 0);
    setData(newData);
    setEditingKey(null);
  };

  const onCancelModal = () => {
    setIsModalVisible(false);
  };

  const handleModal = () => {
    setIsModalVisible(true);
  };

  const save = async (id, remito) => {
    if (form.current) {
      const row = await form.current.validateFields();
      row["ID"] = id;
      row["REMNUM"] = remito;
      const newValues = cleanFields(fieldsList, row);
      if (!row.ID) {
        return dispatch(addItem(newValues));
      }
      dispatch(updateItem(newValues));
    }
  };

  const handleAdd = () => {
    const row = {};
    fieldsList.forEach(
      (column) =>
        (row[column.name] = "number-amount".includes(column.type) ? 0 : "")
    );
    row["REMNUM"] = remito.REMNUM;
    row["REMCAN"] = 1;
    const newData = [...data, row];
    setEditingKey(0);
    setData(newData);
    if (form.current) {
      form.current.setFieldsValue(row);
    }
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
      <Form ref={form} component={false}>
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
          loading={loading}
          summary={() => (
            <TableSummary total={formatAmount(totalAmount)} colSpan={4} />
          )}
        />
        <Divider />
        <Space>
          <AddButton onAdd={handleAdd} disabled={!!editingKey} />
        </Space>
      </Form>
      <Modal
        title="Buscar producto"
        isModalVisible={isModalVisible}
        onClose={onCancelModal}
        onOk={() => searchForm.current.submit()}
      >
        <Form ref={searchForm} onFinish={onOk}>
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
