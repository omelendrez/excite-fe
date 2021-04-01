import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getVendedores } from "../../redux/actions/vendedores";
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

const Vendedores = () => {
  const dispatch = useDispatch();
  const vendedores = useSelector((state) => state.vendedores);
  const { loading, records, error } = vendedores;

  useEffect(() => {
    dispatch(getVendedores());
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
      <Header title="Vendedores" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Vendedores;
