import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";
import { getTransportes, getProvincias } from "redux/actions";
import { createNewRecord } from "utils/helpers";
import fields from "./fields";
import columns from "./columns";

const Transportes = () => {
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const [url, setUrl] = useState("");
  const { loading, records, error } = transportes;

  useEffect(() => {
    dispatch(getProvincias());
    dispatch(getTransportes());
  }, [dispatch]);

  const onAdd = () => {
    setUrl(`/transportes/add/transporte`);
  };

  const onPrint = () => {
    console.log("Printing...");
  };

  const tableProps = {
    loading,
    columns: columns(),
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
      <Header title="Transportes" />
      {error && <Alert message="Error" description={error} type="error" />}
      <Table {...tableProps} />
    </Layout>
  );
};

export default Transportes;
