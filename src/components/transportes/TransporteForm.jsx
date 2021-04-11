import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addTransporte, updateTransporte } from "../../redux/actions";
import { createSelectList, statuses } from "../../utils/helpers";

const TransporteForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} transporte`;
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const { loading, success, error } = transportes;
  const provincias = useSelector((state) => state.provincias);

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addTransporte(values));
    }
    dispatch(updateTransporte(record.ID, values));
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
        optionGroups={{
          provincias: createSelectList(provincias.records, "PROCOD", "PRONOM"),
          estados: createSelectList(statuses, "id", "text"),
        }}
      />
    </Layout>
  );
};

export default TransporteForm;
