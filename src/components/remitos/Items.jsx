import React from "react";
import { Layout, Table as AntdTable, Typography } from "antd";
import { useDispatch } from "react-redux";
import Header from "components/common/Header";
import EditableTable from "./EditableTable";
import Alert from "components/common/Alert";
import { formatAmount } from "utils/helpers";
import { deleteItem } from "redux/actions";
import { itemFields } from "./fields";
import { itemColumns } from "./columns";

const { Text } = Typography;

const Remitos = (props) => {
  const dispatch = useDispatch();
  const { loading, items, error, discount } = props;

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
    dataSource: items,
    fields: itemFields,
    rowKey: "PRODCOD",
    columns: itemColumns,
    summary,
    pagination: false,
    handleDelete,
    discount,
  };

  return (
    <Layout>
      <Header />
      {error && <Alert message="Error" description={error} type="error" />}
      <EditableTable {...tableProps} />
    </Layout>
  );
};

export default Remitos;
