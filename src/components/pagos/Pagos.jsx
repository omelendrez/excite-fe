import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getPagos } from "redux/actions";
const { columns } = require(`./columns`);

const Pagos = () => {
  const dispatch = useDispatch();
  const pagos = useSelector((state) => state.pagos);
  const { loading, records, error } = pagos;

  useEffect(() => {
    dispatch(getPagos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Pagos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Pagos;
