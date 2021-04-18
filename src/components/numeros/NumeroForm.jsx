import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addNumero, updateNumero } from "../../redux/actions";

const NumeroForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} número`;
  const dispatch = useDispatch();
  const numeros = useSelector((state) => state.numeros);
  const { loading, success, error } = numeros;

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addNumero(values));
    }
    dispatch(updateNumero(record.ID, values));
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history && props.history.goBack} />
      <EditForm
        fields={fields}
        record={record}
        loading={loading}
        success={success}
        error={error}
        onFinish={onFinish}
        maximize={props.maximize}
        history={props.history}
      />
    </Layout>
  );
};

export default NumeroForm;
