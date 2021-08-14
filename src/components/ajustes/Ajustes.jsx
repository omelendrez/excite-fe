import React, { useState } from "react";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { createNewRecord } from "utils/helpers";
import columns from "./columns";
import fields from "./fields";

const Ajustes = (props) => {
  const ajustes = useSelector((state) => state.ajustes);
  const [url, setUrl] = useState("");
  const { loading, records, error } = ajustes;

  const onAdd = () => {
    setUrl(`/ajustes/add/ajuste`);
  };

  const tableProps = {
    loading,
    columns: columns(),
    dataSource: records,
    rowKey: "ID",
    onAdd,
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
      <Header title="Ajustes" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ajustes;
