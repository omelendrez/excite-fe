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

const Conceptos = (props) => {
  const conceptos = useSelector((state) => state.conceptos);
  const [url, setUrl] = useState("");
  const { loading, records, error } = conceptos;

  const onAdd = () => {
    setUrl(`/conceptos/add/concepto`);
  };

  const tableProps = {
    loading,
    columns: columns(),
    dataSource: records,
    rowKey: "CONNUM",
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
      <Header title="Conceptos" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}
      <Table {...tableProps} />
    </Layout>
  );
};

export default Conceptos;
