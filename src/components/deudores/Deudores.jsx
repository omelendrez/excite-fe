import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { columns } from "./columns";
import "./deudores.scss";

const Deudores = (props) => {
  const remitos = useSelector((state) => state.remitos);
  const vendedores = useSelector((state) => state.vendedores);
  const { loading, deudores, error } = remitos;
  const { records: filter } = vendedores;

  const onPrint = () => {
    console.log("Printing...");
  };

  const tableProps = {
    loading,
    columns: columns({ filter }),
    dataSource: deudores,
    rowKey: "REMNUM",
    onPrint,
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
