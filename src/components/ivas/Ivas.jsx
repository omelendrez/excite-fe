import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getIva } from "../../redux/actions";
const { columns } = require(`./columns`);

const Ivas = () => {
  const dispatch = useDispatch();
  const iva = useSelector((state) => state.iva);
  const { loading, records, error } = iva;

  useEffect(() => {
    dispatch(getIva());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Iva" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ivas;