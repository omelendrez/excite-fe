import React from "react";
import { Layout, Table as AntdTable, Typography } from "antd";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { formatAmount, sortColumn } from "utils/helpers";
import { columns } from "./columns";
import "./deudores.scss";
const { Title } = Typography;

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

  let filter = [];

  const total = {};

  deudores
    .map((deudor) => {
      total[deudor.CLICOD] = total[deudor.CLICOD]
        ? total[deudor.CLICOD] + deudor.TOTAL
        : deudor.TOTAL;
      deudor.ACCUM = total[deudor.CLICOD];
      return deudor;
    })
    .forEach((d) => {
      if (!filter.find((f) => f.value === d.VENCOD)) {
        filter = [...filter, { text: d.VENNOM, value: d.VENCOD }];
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
    path: props.location.pathname,
  };

  return (
    <Layout>
      <Header title="Deudores" onBack={props.history.goBack} />

      {error && <Alert message="Error" description={error} type="error" />}
      <div className="deudores">
        <Title level={5}>Listado de Deudores</Title>
        <Table {...tableProps} />
      </div>
    </Layout>
  );
};

export default Deudores;
