/**
 * This table solves a specific problem but it has to be refactored to make it more generic
 */
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Form, Space, Divider } from "antd";
import InputField from "../common/InputField";
import Modal from "../common/Modal";
import AddButton from "../common/AddButton";
import EditableCell from "./EditableCell";
import TableSummary from "./TableSummary";
import { cleanFields } from "utils/helpers";
import { addItem, updateItem } from "redux/actions";
import "./editableTable.scss";

const EditableTable = (props) => {
  const {
    dataSource,
    rowKey,
    handleDelete,
    fields,
    columns,
    loading,
    discount,
  } = props;
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

  const fieldsList = fields({
    productos,
    handleSelectedValue,
  });

  const prodcodValidator = (params) => {
    const { field: fieldName } = params;
    const value = form.current.getFieldValue(fieldName);
    return new Promise((resolve, reject) => {
      const producto = productos.records.find(
        (producto) => producto.PRODCOD === value
      );
      let price = producto.PRODPRE;
      const name = producto.PRODDES;
      const tipo =
        (clientes.tipos &&
          clientes.tipos.find((tipo) => tipo.TIPCOD === producto.TIPCOD)) ||
        null;
      if (tipo) {
        price = tipo.CLIPRODPRE;
      }
      const element = `tr[data-row-key="${editingKey}"] td.ant-table-cell-ellipsis`;
      if (!!producto) {
        document.querySelector(element).textContent = name;
        form.current.setFields([{ name: "REMPRE", value: parseFloat(price) }]);
        return resolve();
      } else {
        document.querySelector(element).textContent = "";
        form.current.setFields([{ name: "REMPRE", value: 0 }]);
        return reject();
      }
    });
  };

  useEffect(() => {
    !!document.getElementsByTagName("input").length &&
      document.getElementsByTagName("input")[0].focus();
  }, [editingKey]);

  useEffect(() => {
    setData(dataSource);
    setEditingKey(null);
  }, [dataSource, loading]);

  const onSearchOk = () => {
    if (!selectedValue) return;
    const value = selectedValue;
    const producto = productos.records.find(
      (producto) => producto.PRODCOD === value
    );
    let price = producto.PRODPRE;
    const name = producto.PRODDES;
    const tipo =
      (clientes.tipos &&
        clientes.tipos.find((tipo) => tipo.TIPCOD === producto.TIPCOD)) ||
      null;
    if (tipo) {
      price = tipo.CLIPRODPRE;
    }

    document.querySelector(
      `tr[data-row-key="${editingKey}"] td.ant-table-cell-ellipsis`
    ).textContent = name;

    if (form.current) {
      form.current.setFields([{ name: "PRODCOD", value }]);
      form.current.setFields([{ name: "REMPRE", value: price }]);
    }
    setIsModalVisible(false);
    document.getElementsByTagName("input")[0].focus();
  };

  const isEditing = (record) => record.PRODCOD === editingKey;

  const edit = (record) => {
    if (form.current) {
      form.current.setFieldsValue(record);
      setEditingKey(record.PRODCOD);
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
    setEditingKey("");
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
    prodcodValidator,
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
          rules: col.rules,
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
            <TableSummary total={totalAmount} discount={discount} colSpan={4} />
          )}
        />
        <Divider />
        <Space>
          <AddButton onAdd={handleAdd} disabled={editingKey !== null} />
        </Space>
      </Form>
      <Modal
        title="Buscar producto"
        isModalVisible={isModalVisible}
        onClose={onCancelModal}
        onOk={() => searchForm.current.submit()}
      >
        <Form ref={searchForm} onFinish={onSearchOk}>
          <InputField field={field} optionsModels={field.optionsModels} />
        </Form>
      </Modal>
    </>
  );
};

export default EditableTable;
