import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getConceptos } from "../../redux/actions/conceptos";
const { columns } = require(`./columns`);

const Conceptos = () => {
  const dispatch = useDispatch();
  const conceptos = useSelector((state) => state.conceptos);
  const { loading, records, error } = conceptos;

  useEffect(() => {
    dispatch(getConceptos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Conceptos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Conceptos;
