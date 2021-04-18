import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import {
  getClientes,
  getIvas,
  getProvincias,
  getVendedores,
  getTransportes,
} from "../../redux/actions";
import fields from "./fields";
import columns from "./columns";

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const [url, setUrl] = useState("");
  const { loading, records, error } = clientes;

  useEffect(() => {
    dispatch(getIvas());
    dispatch(getTransportes());
    dispatch(getProvincias());
    dispatch(getVendedores());
    dispatch(getClientes());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/clientes/add/cliente`);
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
      <Header title="Clientes" />

      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Clientes;
