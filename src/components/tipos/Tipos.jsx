import React, { useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import { Redirect } from "react-router-dom";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { createNewRecord } from "utils/helpers";
import fields from "./fields";
import columns from "./columns";

const Tipos = (props) => {
  const tipos = useSelector((state) => state.tipos);
  const [url, setUrl] = useState("");
  const { loading, records, error } = tipos;

  const onAdd = () => {
    setUrl(`/tipos/add/tipo`);
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
    path: props.location.pathname,
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
      <Header title="Tipos" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Tipos;
