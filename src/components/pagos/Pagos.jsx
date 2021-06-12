import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getPagos } from "redux/actions";
import { columns } from "./columns.js";
import { fields } from "./fields";
import { createNewRecord } from "utils/helpers";

const Pagos = () => {
  const dispatch = useDispatch();
  const pagos = useSelector((state) => state.pagos);
  const { loading, records, error } = pagos;
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(getPagos());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/pagos/add/pago`);
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

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowKey: "ID",
    onAdd,
  };

  return (
    <Layout>
      <Header title="Pagos" />
      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />
    </Layout>
  );
};

export default Pagos;
