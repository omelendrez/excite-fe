import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";

const ClienteEdit = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} cliente`;
  const iva = useSelector((state) => state.iva);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history.goBack} />
      <EditForm
        fields={fields}
        record={record}
        onFinish={onFinish}
        optionGroups={{
          interior: [
            { id: "BAHIA BLANCA", text: "BAHIA BLANCA" },
            { id: "INTERIOR", text: "INTERIOR" },
          ],
          iva: iva.records.map((record) => ({
            id: record.IVACOD,
            text: record.IVADES,
          })),
        }}
      />
    </Layout>
  );
};

export default ClienteEdit;
