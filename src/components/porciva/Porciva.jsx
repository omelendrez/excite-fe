import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
const { columns } = require(`./columns`);

const Porciva = (props) => {
  const porciva = useSelector((state) => state.porciva);
  const { loading, records, error } = porciva;

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Porciva" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Porciva;
