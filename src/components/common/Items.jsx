import React from "react";
import { Table as AntdTable } from "antd";
import Table from "./Table";
import { formatAmount } from "utils/helpers";

const Items = (props) => {
  const {
    loading,
    items,
    columns,
    onAdd,
    handleDelete,
    handleEdit,
    summaryField,
    colSpan,
  } = props;

  const summary = (pageData) => {
    let totalAmount = 0;
    pageData.forEach((item) => {
      totalAmount += item[summaryField];
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={colSpan || 1}>
          {formatAmount(totalAmount)}
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
    size: "small",
    summary: summaryField ? summary : null,
  };

  return <Table {...tableProps} />;
};

export default Items;
