import React from "react";
import { Table as AntdTable } from "antd";
import { formatAmount } from "utils/helpers";

const TableSummary = (props) => {
  const { colSpan, total, discount } = props;
  return (
    <>
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={colSpan || 1}>
          {formatAmount(total)}
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Descuento</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={colSpan || 1}>
          {formatAmount(discount)}
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Neto</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={colSpan || 1}>
          {formatAmount(total - discount)}
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    </>
  );
};

export default TableSummary;
