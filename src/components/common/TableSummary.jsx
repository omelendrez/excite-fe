import React from "react";
import { Table as AntdTable } from "antd";

const TableSummary = (props) => {
  const { colSpan, total } = props;
  return (
    <AntdTable.Summary.Row className="summary-row">
      <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
      <AntdTable.Summary.Cell align="right" colSpan={colSpan || 1}>
        {total}
      </AntdTable.Summary.Cell>
    </AntdTable.Summary.Row>
  );
};

export default TableSummary;
