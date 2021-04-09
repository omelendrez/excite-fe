import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getVendedores } from "../../redux/actions";
import fields from "./fields";
const { columns } = require(`./columns`);

const Vendedores = () => {
  const dispatch = useDispatch();
  const vendedores = useSelector((state) => state.vendedores);
  const [url, setUrl] = useState("");
  const { loading, records, error } = vendedores;

  useEffect(() => {
    dispatch(getVendedores());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/vendedores/add/vendedor`);
  };

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    onAdd,
  };

  if (!!url) {
    const record = {};
    fields
      .filter((field) => field.name !== "ID")
      .forEach((field) => {
        record[field.name] = "";
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
      <Header title="Vendedores" />
      {error && <Alert message="Error" description={error} type="error" />}
      <Table {...tableProps} />
    </Layout>
  );
};

export default Vendedores;
