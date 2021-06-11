import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import {
  getRemitos,
  getEstados,
  getClientes,
  getVendedores,
} from "redux/actions";
import { createNewRecord } from "utils/helpers";

import columns from "./columns";
import fields from "./fields";

const Remitos = () => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, records, error } = remitos;
  const [url, setUrl] = useState("");

  const onAdd = () => {
    setUrl(`/remitos/add/remito`);
  };

  useEffect(() => {
    dispatch(getVendedores());
    dispatch(getClientes());
    dispatch(getEstados());
    dispatch(getRemitos());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    onAdd,
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
      <Header title="Remitos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Remitos;
