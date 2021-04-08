import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addTransporte, updateTransporte } from "../../redux/actions";

const TransportEdit = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} transporte`;
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const { loading, success, error } = transportes;

  const onFinish = (values) => {
    if (!record.ID) {
      dispatch(addTransporte(values));
    }
    dispatch(updateTransporte(record.ID, values));
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history.goBack} />
      <EditForm
        fields={fields}
        record={record}
        loading={loading}
        success={success}
        error={error}
        onFinish={onFinish}
      />
    </Layout>
  );
};

export default TransportEdit;
