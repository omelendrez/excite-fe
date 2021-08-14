import React, { useState } from "react";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { columns } from "./columns.js";
import { fields } from "./fields";
import { createNewRecord } from "utils/helpers";

const Pagos = (props) => {
  const pagos = useSelector((state) => state.pagos);
  const { loading, records, error } = pagos;
  const [url, setUrl] = useState("");

  const onAdd = () => {
    setUrl(`/pagos/add/pago`);
  };

  const onPrint = () => {
    console.log("Printing...");
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

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    onAdd,
    onPrint,
    path: props.location.pathname,
  };

  return (
    <Layout>
      <Header title="Pagos" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Pagos;
