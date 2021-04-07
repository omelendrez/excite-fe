import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";

const VendedorEdit = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} vendedor`;

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history.goBack} />
      <EditForm fields={fields} record={record} onFinish={onFinish} />
    </Layout>
  );
};

export default VendedorEdit;
