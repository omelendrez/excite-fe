import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getTipos, getSubtipos } from "../../redux/actions";
import columns from "./columns";

const Subtipos = () => {
  const dispatch = useDispatch();
  const subtipos = useSelector((state) => state.subtipos);
  const tipos = useSelector((state) => state.tipos);
  const { loading, records, error } = subtipos;

  useEffect(() => {
    dispatch(getTipos());
    dispatch(getSubtipos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns: columns({ tipos: tipos.records }),
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
