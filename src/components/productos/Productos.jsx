import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getProductos, getTipos, getSubtipos } from "redux/actions";
import { createNewRecord } from "utils/helpers";
import fields from "./fields";
import columns from "./columns";

const Productos = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.productos);
  const tipos = useSelector((state) => state.tipos);
  const subtipos = useSelector((state) => state.subtipos);

  const [url, setUrl] = useState("");
  const { loading, records, error } = productos;

  useEffect(() => {
    dispatch(getTipos());
    dispatch(getSubtipos());
    dispatch(getProductos());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/productos/add/producto`);
  };

  const onPrint = () => {
    console.log("Printing...");
  };

  const tableProps = {
    loading,
    columns: columns({ tipos: tipos.records, subtipos: subtipos.records }),
    dataSource: records,
    rowKey: "ID",
    onAdd,
    onPrint,
  };

  if (!!url) {
    const record = createNewRecord(fields);
    return (
      <Redirect
        push
        to={{
          pathname: url,
          state: {
            record,
          },
        }}
      />
    );
  }

  return (
    <Layout>
      <Header title="Productos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Productos;
