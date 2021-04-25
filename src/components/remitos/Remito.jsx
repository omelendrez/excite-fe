import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Space, Tabs, Typography, Table as AntdTable } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import Table from "../common/Table";
import Info from "../common/Info";
import EditButton from "../common/EditButton";
import notification from "../common/notification";
import { getRemito, getItems, deleteRemito } from "../../redux/actions";
import fields from "./fields";
import { setFields } from "../../utils/helpers";
import { formatAmount } from "../../utils/helpers";
import "./remito.css";

const { TabPane } = Tabs;
const { Text } = Typography;

const Tipo = (props) => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, success, record, error, items } = remitos;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getRemito(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record && record.REMNUM) {
      dispatch(getItems(record.REMNUM));
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [dispatch, record]);

  useEffect(() => {
    if (success && record.message) {
      notification({
        message: "Registro eliminado",
        description: "El registro fue eliminado con éxito",
        type: "success",
      });
      props.history.goBack();
    }
    if (error) {
      notification({
        message: "Error",
        description: "Error al intentar eliminar el registro",
        type: "error",
      });
    }
  }, [success, record, error, props.history]);

  const handleEdit = () => {
    setUrl(`/remitos/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteRemito(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: remitos.record } }}
      />
    );
  }

  const onAddItem = () => {
    setUrl(`/remitos/${record.REMNUM}/add/item`);
  };

  const itemsColumns = [
    {
      dataIndex: "PRODDES",
      title: "Producto",
      searchable: true,
      width: 300,
    },
    {
      dataIndex: "REMCAN",
      title: "Cantidad",
      width: 100,
    },
    {
      dataIndex: "REMPRE",
      title: "Precio",
      render: (text, record) => formatAmount(text),
      align: "right",
      width: 120,
    },
    {
      dataIndex: "REMTOT",
      title: "Total",
      render: (text, record) => formatAmount(record.REMCAN * record.REMPRE),
      align: "right",
      width: 120,
    },
    {
      dataIndex: "actions",
      render: () => (
        <Space>
          <EditButton />
        </Space>
      ),
    },
  ];

  const itemsSummary = (pageData) => {
    let totalAmount = 0;
    let items = 0;
    pageData.forEach((item) => {
      totalAmount += item.REMCAN * item.REMPRE;
      items++;
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell>
          <Text type="primary">{items}</Text>
        </AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={2}>
          <Text type="primary">{formatAmount(totalAmount)}</Text>
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    );
  };

  const itemsTableProps = {
    loading,
    columns: itemsColumns,
    dataSource: items,
    rowKey: "ID",
    onAdd: onAddItem,
    summary: itemsSummary,
    pagination: false,
  };

  return (
    <Layout>
      <Header
        title={`Remito ${record.REMNUM}`}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <div className="card-container">
        <Tabs>
          <TabPane tab="Info" key="1">
            <Info
              title={info.REMNUM}
              fields={fields}
              data={info}
              onEdit={handleEdit}
              onDelete={handleDelete}
              success={success}
              history={props.history}
            />
          </TabPane>
          <TabPane tab={`Items (${remitos.items.length})`} key="2">
            <Table {...itemsTableProps} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Tipo;
