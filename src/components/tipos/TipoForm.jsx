import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addTipo, updateTipo } from "../../redux/actions";
import { createSelectList, statuses } from "../../utils/helpers";

const TipoForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} tipo`;
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipos);
  const { loading, success, error } = tipos;
  const provincias = useSelector((state) => state.provincias);

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addTipo(values));
    }
    dispatch(updateTipo(record.ID, values));
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
          provincias: createSelectList(provincias.records, "PROCOD", "PRONOM"),
          estados: createSelectList(statuses, "id", "text"),
        }}
      />
    </Layout>
  );
};

export default TipoForm;
