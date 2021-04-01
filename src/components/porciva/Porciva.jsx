import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getPorciva } from "../../redux/actions/porciva";
const { columns } = require(`./columns`);

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

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
    rowSelection: { ...rowSelection },
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
