import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getProductos } from "../../redux/actions/productos";
const { columns } = require(`./columns`);

const Productos = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  const { loading, records, error } = productos;

  useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Productos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Productos;
