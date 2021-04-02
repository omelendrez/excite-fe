import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getTransportes } from "../../redux/actions/transportes";
const { columns } = require(`./columns`);

const Transportes = () => {
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const { loading, records, error } = transportes;

  useEffect(() => {
    dispatch(getTransportes());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Transportes" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Transportes;
