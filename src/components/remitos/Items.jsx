import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Table as AntdTable, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { formatAmount } from "../../utils/helpers";
import columns from "./itemsColumns";
import {
  getItem,
  cleanItem,
  getProductos,
  deleteItem,
} from "../../redux/actions";

const { Text } = Typography;

const Remitos = (props) => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, items, item, error } = remitos;
  const [addUrl, setAddUrl] = useState("");
  const [editUrl, setEditUrl] = useState("");

  useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);

  const onAdd = () => {
    dispatch(cleanItem({ REMNUM: props.ID }));
    setTimeout(() => {
      setAddUrl(`/remitos/items/add/item`);
    }, 100);
  };

  if (!!addUrl) {
    return <Redirect push to={addUrl} />;
  }

  const handleEdit = (record) => {
    dispatch(getItem(record.ID));
    setTimeout(() => {
      setEditUrl(`/remitos/items/edit/${record.ID}`);
    }, 100);
  };

  const handleDelete = (record) => {
    dispatch(deleteItem(record.ID));
  };

  if (!!editUrl) {
    return (
      <Redirect
        push
        to={{
          pathname: editUrl,
          state: { record: item },
        }}
      />
    );
  }

  const summary = (pageData) => {
    let totalAmount = 0;
    pageData.forEach((item) => {
      totalAmount += item.REMCAN * item.REMPRE;
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={3}>
          <Text type="primary">{formatAmount(totalAmount)}</Text>
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    );
  };

  const tableProps = {
    loading,
    columns: columns({ handleEdit: handleEdit, handleDelete: handleDelete }),
    dataSource: items,
    rowKey: "ID",
    onAdd: onAdd,
    summary,
    pagination: false,
  };

  return (
    <Layout>
      <Header title="Items" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Remitos;
