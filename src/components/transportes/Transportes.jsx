import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getTransportes } from "../../redux/actions";
const { columns } = require(`./columns`);

const Transportes = () => {
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const [url, setUrl] = useState("");
  const { loading, records, error } = transportes;

  useEffect(() => {
    dispatch(getTransportes());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/transportes/add/transporte`);
  };

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    onAdd,
  };

  if (!!url) {
    return <Redirect push to={{ pathname: url, state: { record: {} } }} />;
  }

  return (
    <Layout>
      <Header title="Transportes" />
      {error && <Alert message="Error" description={error} type="error" />}
      <Table {...tableProps} />
    </Layout>
  );
};

export default Transportes;
