import React, { useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { createNewRecord } from "utils/helpers";

import { columns } from "./columns";
import { fields } from "./fields";

const Remitos = (props) => {
  const remitos = useSelector((state) => state.remitos);
  const { loading, records, error } = remitos;
  const [url, setUrl] = useState("");

  const onAdd = () => {
    setUrl(`/remitos/add/remito`);
  };

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "REMNUM",
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
      <Header title="Presupuestos" onBack={props.history.goBack} />

      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Remitos;
