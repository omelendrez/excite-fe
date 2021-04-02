import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getNumeros } from "../../redux/actions/numeros";
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

const Numeros = () => {
  const dispatch = useDispatch();
  const numeros = useSelector((state) => state.numeros);
  const { loading, records, error } = numeros;

  useEffect(() => {
    dispatch(getNumeros());
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
      <Header title="Nnumeros" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Numeros;
