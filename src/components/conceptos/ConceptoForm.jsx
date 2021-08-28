import React from "react";
import { Layout } from "antd";
import Header from "components/common/Header";
import EditForm from "components/common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addConcepto, updateConcepto } from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const ConceptoForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} concepto`;
  const dispatch = useDispatch();
  const conceptos = useSelector((state) => state.conceptos);
  const { loading, success, error } = conceptos;
  const clientes = useSelector((state) => state.clientes);

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!record.CONNUM) {
      return dispatch(addConcepto(newValues));
    }
    dispatch(updateConcepto(record.ID, newValues));
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
