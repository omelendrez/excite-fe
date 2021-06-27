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

const Transportes = (props) => {
  const transportes = useSelector((state) => state.transportes);
  const [url, setUrl] = useState("");
  const { loading, records, error } = transportes;

  const onAdd = () => {
    setUrl(`/transportes/add/transporte`);
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
      <Header title="Transportes" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}
      <Table {...tableProps} />
    </Layout>
  );
};

export default Transportes;
