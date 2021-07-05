import React from "react";
import { Layout, Table as AntdTable } from "antd";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { formatAmount, sortColumn } from "utils/helpers";
import { columns } from "./columns";

const Deudores = (props) => {
  const remitos = useSelector((state) => state.remitos);
  const { loading, deudores, error } = remitos;

  const onPrint = () => {
    window.print();
  };

  const summary = (pageData) => {
    let totalAmount = 0;
    pageData.forEach((item) => {
      totalAmount += item.TOTAL;
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell colSpan={6}>
          Total documentos listados: {pageData.length}
        </AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={3}>
          {formatAmount(totalAmount)}
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    );
  };

  const filter = [];

  deudores.forEach((d) => {
    if (!filter.find((f) => f.value === d.VENCOD)) {
      filter.push({ text: d.VENNOM, value: d.VENCOD });
    }
  });

  const tableProps = {
    loading,
    columns: columns({
      filter: filter.sort((a, b) => sortColumn(a, b, "text")),
    }),
    dataSource: deudores,
    rowKey: "REMNUM",
    onPrint,
    summary,
    pagination: false,
    id: "section-to-print",
  };

  return (
    <Layout>
      <Header title="Deudores" onBack={props.history.goBack} />

      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Deudores;
