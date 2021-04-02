import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getTipos } from "../../redux/actions/tipos";
const { columns } = require(`./columns`);

const Tipos = () => {
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipos);
  const { loading, records, error } = tipos;

  useEffect(() => {
    dispatch(getTipos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Tipos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Tipos;
