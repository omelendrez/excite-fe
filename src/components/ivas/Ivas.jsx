import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getIvas } from "../../redux/actions";
const { columns } = require(`./columns`);

const Ivas = () => {
  const dispatch = useDispatch();
  const ivas = useSelector((state) => state.ivas);
  const { loading, records, error } = ivas;

  useEffect(() => {
    dispatch(getIvas());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Ivas" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ivas;
