import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Table from "../common/Table";
import Alert from "../common/Alert";
import { getIvas } from "../../redux/actions";
import columns from "./columns";
import fields from "./fields";

const Ivas = () => {
  const dispatch = useDispatch();
  const ivas = useSelector((state) => state.ivas);
  const { loading, records, error } = ivas;
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(getIvas());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/ivas/add/iva`);
  };

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    onAdd,
  };

  if (!!url) {
    const record = {};
    fields
      .filter((field) => field.name !== "ID")
      .forEach((field) => {
        record[field.name] = field.type === "number" ? 0 : "";
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
      <Header title="Ivas" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ivas;
