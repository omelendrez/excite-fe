import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import { Redirect } from "react-router-dom";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getTipos, getSubtipos } from "redux/actions";
import { createNewRecord } from "utils/helpers";
import fields from "./fields";
import columns from "./columns";

const Tipos = () => {
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipos);
  const [url, setUrl] = useState("");
  const { loading, records, error } = tipos;

  useEffect(() => {
    dispatch(getTipos());
    dispatch(getSubtipos());
  }, [dispatch]);

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
      <Header title="Tipos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Tipos;
