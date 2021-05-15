import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import {
  getRemitos,
  getEstados,
  getClientes,
  getVendedores,
} from "redux/actions";
const { columns } = require(`./columns`);

const Remitos = () => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, records, error } = remitos;

  useEffect(() => {
    dispatch(getVendedores());
    dispatch(getClientes());
    dispatch(getEstados());
    dispatch(getRemitos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Remitos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Remitos;
