import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getNumeros } from "redux/actions";
import { createNewRecord } from "utils/helpers";
import fields from "./fields";
import columns from "./columns";

const Numeros = () => {
  const dispatch = useDispatch();
  const numeros = useSelector((state) => state.numeros);
  const [url, setUrl] = useState("");
  const { loading, records, error } = numeros;

  useEffect(() => {
    dispatch(getNumeros());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/ultimos-numeros/add/numero`);
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
      <Header title="Números" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Numeros;
