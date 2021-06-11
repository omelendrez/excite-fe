import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getAjustes, getProductos } from "redux/actions";
import { createNewRecord } from "utils/helpers";
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
      <Header title="Ajustes" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Ajustes;
