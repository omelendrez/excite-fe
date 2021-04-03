import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";

const TransportEdit = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Header title={"Modificando transporte"} onBack={props.history.goBack} />
      <EditForm fields={fields} onFinish={onFinish} on />
    </Layout>
  );
};

export default TransportEdit;
