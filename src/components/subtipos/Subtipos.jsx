import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getTipos, getSubtipos } from "redux/actions";
import columns from "./columns";
import fields from "./fields";

const Subtipos = () => {
  const dispatch = useDispatch();
  const subtipos = useSelector((state) => state.subtipos);
  const tipos = useSelector((state) => state.tipos);
  const [url, setUrl] = useState("");
  const { loading, records, error } = subtipos;

  useEffect(() => {
    dispatch(getTipos());
    dispatch(getSubtipos());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/subtipos/add/subtipo`);
  };

  const tableProps = {
    loading,
    columns: columns({ tipos: tipos.records }),
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
      <Header title="Subtipos" />

      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Subtipos;
