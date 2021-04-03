import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getProductos, getTipos, getSubtipos } from "../../redux/actions";
import columns from "./columns";

const Productos = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.productos);
  const tipos = useSelector((state) => state.tipos);
  const subtipos = useSelector((state) => state.subtipos);

  const { loading, records, error } = productos;

  useEffect(() => {
    dispatch(getTipos());
    dispatch(getSubtipos());
    dispatch(getProductos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns: columns({ tipos: tipos.records, subtipos: subtipos.records }),
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
