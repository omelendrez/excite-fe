import React from "react";
import { Layout, Table as AntdTable, Typography } from "antd";
import Header from "./Header";
import Table from "./Table";
import Alert from "./Alert";
import { formatAmount } from "utils/helpers";
const { Text } = Typography;

const Items = (props) => {
  const {
    loading,
    error,
    items,
    columns,
    title,
    onAdd,
    handleDelete,
    handleEdit,
    summaryField,
  } = props;

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
    <Layout>
      <Header title={title} />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Items;
