import React, { useState, useEffect } from "react";
import { Layout, Table as AntdTable, Typography } from "antd";
import Header from "./Header";
import Table from "./Table";
import Drawer from "./Drawer";
import Alert from "./Alert";
import { formatAmount } from "utils/helpers";
const { Text } = Typography;

const Items = (props) => {
  const {
    loading,
    success,
    error,
    items,
    item,
    columns,
    title,
    onAdd,
    ItemForm,
    showDrawer,
    handleClose,
    handleDelete,
    handleEdit,
    summaryField,
  } = props;
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  const summary = (pageData) => {
    let totalAmount = 0;
    pageData.forEach((item) => {
      totalAmount += item[summaryField];
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={2}>
          <Text type="primary">{formatAmount(totalAmount)}</Text>
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    );
  };

  const tableProps = {
    loading,
    columns: columns({ handleEdit, handleDelete }),
    dataSource: items,
    rowKey: "ID",
    pagination: false,
    onAdd,
    summary: summaryField ? summary : null,
  };

  return (
    <>
      <Layout>
        <Header title={title} />
        {error && <Alert message="Error" description={error} type="error" />}

        <Table {...tableProps} />
      </Layout>
      <Drawer
        isDrawerVisible={showDrawer}
        handleClose={handleClose}
        title={`${item && item.ID ? "Modificando" : "Agregando"} item`}
      >
        <ItemForm
          closeDrawer={handleClose}
          item={currentItem}
          success={success}
          error={error}
          loading={loading}
        />
      </Drawer>
    </>
  );
};

export default Items;
