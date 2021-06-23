import React, { useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { createNewRecord } from "utils/helpers";
import columns from "./columns";
import fields from "./fields";

const Subtipos = () => {
  const subtipos = useSelector((state) => state.subtipos);
  const tipos = useSelector((state) => state.tipos);
  const [url, setUrl] = useState("");
  const { loading, records, error } = subtipos;

  const onAdd = () => {
    setUrl(`/subtipos/add/subtipo`);
  };

  const onPrint = () => {
    console.log("Printing...");
  };

  const tableProps = {
    loading,
    columns: columns({ tipos: tipos.records }),
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
      <Header title="Subtipos" />

      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Subtipos;
