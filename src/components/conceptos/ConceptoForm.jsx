import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addConcepto, updateConcepto } from "../../redux/actions";
import { getSelectList } from "../../utils/helpers";

const ConceptoForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} concepto`;
  const dispatch = useDispatch();
  const numeros = useSelector((state) => state.numeros);
  const { loading, success, error } = numeros;
  const clientes = useSelector((state) => state.clientes);

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addConcepto(values));
    }
    dispatch(updateConcepto(record.ID, values));
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
        optionsModels={{
          clientes: getSelectList("clientes", clientes.records),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default ConceptoForm;
