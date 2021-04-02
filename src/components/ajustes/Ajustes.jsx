import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getAjustes } from "../../redux/actions/ajustes";
const { columns } = require(`./columns`);

const Ajustes = () => {
  const dispatch = useDispatch();
  const ajustes = useSelector((state) => state.ajustes);
  const { loading, records, error } = ajustes;

  useEffect(() => {
    dispatch(getAjustes());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Ajustes" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ajustes;
