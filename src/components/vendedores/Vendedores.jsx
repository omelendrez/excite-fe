import React, { useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { createNewRecord } from "utils/helpers";
import fields from "./fields";
import columns from "./columns";

const Vendedores = (props) => {
  const vendedores = useSelector((state) => state.vendedores);
  const [url, setUrl] = useState("");
  const { loading, records, error } = vendedores;

  const onAdd = () => {
    setUrl(`/vendedores/add/vendedor`);
  };

  const onPrint = () => {
    console.log("Printing...");
  };

  const tableProps = {
    loading,
    columns: columns(),
    dataSource: records,
    rowKey: "ID",
    onAdd,
    onPrint,
  };

  if (!!url) {
    const record = createNewRecord(fields);
    return (
      <Redirect
        push
        to={{
          pathname: url,
          state: {
            record,
          },
        }}
      />
    );
  }

  return (
    <Layout>
      <Header title="Vendedores" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}
      <Table {...tableProps} />
    </Layout>
  );
};

export default Vendedores;
