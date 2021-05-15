import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getPorciva } from "redux/actions";
const { columns } = require(`./columns`);

const Porciva = () => {
  const dispatch = useDispatch();
  const porciva = useSelector((state) => state.porciva);
  const { loading, records, error } = porciva;

  useEffect(() => {
    dispatch(getPorciva());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Porciva" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Porciva;
