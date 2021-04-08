import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getClientes, getIva } from "../../redux/actions";
const { columns } = require(`./columns`);

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const [url, setUrl] = useState("");
  const { loading, records, error } = clientes;

  useEffect(() => {
    dispatch(getIva());
    dispatch(getClientes());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/clientes/add/cliente`);
  };

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    onAdd,
  };

  if (!!url) {
    return <Redirect push to={{ pathname: url, state: { record: {} } }} />;
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
