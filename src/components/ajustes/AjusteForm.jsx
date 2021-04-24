import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addAjuste, updateAjuste } from "../../redux/actions";
import { getSelectList } from "../../utils/helpers";

const AjusteForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} ajuste`;
  const dispatch = useDispatch();
  const ajustes = useSelector((state) => state.ajustes);
  const { loading, success, error } = ajustes;
  const productos = useSelector((state) => state.productos);

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addAjuste(values));
    }
    dispatch(updateAjuste(record.ID, values));
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
          productos: getSelectList("productos", productos.records),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default AjusteForm;
