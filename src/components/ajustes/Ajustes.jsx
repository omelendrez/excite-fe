import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getAjustes, getProductos } from "../../redux/actions";
import columns from "./columns";
import fields from "./fields";

const Ajustes = () => {
  const dispatch = useDispatch();
  const ajustes = useSelector((state) => state.ajustes);
  const [url, setUrl] = useState("");
  const { loading, records, error } = ajustes;

  useEffect(() => {
    dispatch(getProductos());
    dispatch(getAjustes());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/ajustes/add/ajuste`);
  };

  const tableProps = {
    loading,
    columns: columns(),
    dataSource: records,
    rowKey: "ID",
    onAdd,
  };

  if (!!url) {
    const record = {};
    fields
      .filter((field) => field.name !== "ID")
      .forEach((field) => {
        switch (field.type) {
          default:
            record[field.name] = "";
            break;
          case "number":
            record[field.name] = 0;
            break;
          case "date":
            record[field.name] = undefined;
            break;
        }
      });
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
      <Header title="Ajustes" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ajustes;
