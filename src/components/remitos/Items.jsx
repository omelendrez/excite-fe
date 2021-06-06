import React, { useEffect, useState } from "react";
import { Layout, Table as AntdTable, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import Drawer from "components/common/Drawer";
import ItemForm from "./ItemForm";
import { formatAmount } from "utils/helpers";
import columns from "./itemsColumns";
import { getItem, cleanItem, getProductos, deleteItem } from "redux/actions";

const { Text } = Typography;

const Remitos = (props) => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, items, item, error, success } = remitos;
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  const onAdd = () => {
    dispatch(cleanItem({ REMNUM: props.ID }));
    setShowDrawer(true);
  };

  const handleClose = () => {
    setShowDrawer(false);
  };

  const handleEdit = (record) => {
    dispatch(getItem(record.ID));
    setShowDrawer(true);
  };

  const handleDelete = (record) => {
    dispatch(deleteItem(record));
  };

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
    <>
      <Layout>
        <Header title="Items" />
        {error && <Alert message="Error" description={error} type="error" />}

        <Table {...tableProps} />
      </Layout>
      <Drawer
        isDrawerVisible={showDrawer}
        handleClose={handleClose}
        title={`${item.ID ? "Modificando" : "Agregando"} item`}
      >
        {!loading && (
          <ItemForm
            closeDrawer={handleClose}
            item={currentItem}
            success={success}
            error={error}
            loading={loading}
          />
        )}
      </Drawer>
    </>
  );
};

export default Remitos;
