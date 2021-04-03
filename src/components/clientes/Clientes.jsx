import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getClientes } from "../../redux/actions";
const { columns } = require(`./columns`);

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, records, error } = clientes;

  useEffect(() => {
    dispatch(getClientes());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    searchFields: ["CLINOM"],
  };

  return (
    <Layout>
      <Header title="Clientes" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Clientes;
