import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { createNewRecord } from "utils/helpers";
import columns from "./columns";
import fields from "./fields";

const Ivas = (props) => {
  const ivas = useSelector((state) => state.ivas);
  const { loading, records, error } = ivas;
  const [url, setUrl] = useState("");

  const onAdd = () => {
    setUrl(`/ivas/add/iva`);
  };

  const tableProps = {
    loading,
    columns: columns(),
    dataSource: records,
    rowKey: "ID",
    onAdd,
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
      <Header title="Ivas" onBack={props.history.goBack} />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ivas;
