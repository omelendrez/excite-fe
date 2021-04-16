import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import { Redirect } from "react-router-dom";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getTipos, getSubtipos } from "../../redux/actions";
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

  const tableProps = {
    loading,
    columns: columns(),
    dataSource: records,
    rowKey: "ID",
    onAdd,
  };

  if (!!url) {
    const record = {};
    fields
      .filter((field) => field.name !== "ID")
      .forEach((field) => {
        record[field.name] = field.type === "number" ? 0 : "";
      });
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
