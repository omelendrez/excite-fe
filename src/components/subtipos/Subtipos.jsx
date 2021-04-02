import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getSubtipos } from "../../redux/actions/subtipos";
const { columns } = require(`./columns`);

const Subtipos = () => {
  const dispatch = useDispatch();
  const subtipos = useSelector((state) => state.subtipos);
  const { loading, records, error } = subtipos;

  useEffect(() => {
    dispatch(getSubtipos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header title="Subtipos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Subtipos;
