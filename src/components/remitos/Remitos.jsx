import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getRemitos } from "../../redux/actions/remitos";
const { columns } = require(`./columns`);

const Remitos = () => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, records, error } = remitos;

  useEffect(() => {
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
