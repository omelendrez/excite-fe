import React from "react";
import { Layout } from "antd";
import Header from "components/common/Header";
import EditForm from "components/common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addRemito, updateTipo } from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const RemitoForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} remito`;
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, success, error } = remitos;
  const estados = useSelector((state) => state.estados);
  const clientes = useSelector((state) => state.clientes);
  const vendedores = useSelector((state) => state.vendedores);

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!record.ID) {
      return dispatch(addRemito(newValues));
    }
    dispatch(updateTipo(record.ID, newValues));
  };

  console.log(record);

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
          estados: getSelectList("estados", estados.records),
          clientes: getSelectList("clientes", clientes.records),
          vendedores: getSelectList("vendedores", vendedores.records),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default RemitoForm;
