import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getConceptos, getClientes } from "redux/actions";
import fields from "./fields";
import columns from "./columns";

const Conceptos = () => {
  const dispatch = useDispatch();
  const conceptos = useSelector((state) => state.conceptos);
  const [url, setUrl] = useState("");
  const { loading, records, error } = conceptos;

  useEffect(() => {
    dispatch(getClientes());
    dispatch(getConceptos());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/conceptos/add/concepto`);
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
      <Header title="Conceptos" />
      {error && <Alert message="Error" description={error} type="error" />}
      <Table {...tableProps} />
    </Layout>
  );
};

export default Conceptos;
