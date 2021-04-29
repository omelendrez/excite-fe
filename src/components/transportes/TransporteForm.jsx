import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addTransporte, updateTransporte } from "../../redux/actions";
import { getSelectList, statuses, cleanFields } from "../../utils/helpers";

const TransporteForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} transporte`;
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const { loading, success, error } = transportes;
  const provincias = useSelector((state) => state.provincias);

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!record.ID) {
      return dispatch(addTransporte(newValues));
    }
    dispatch(updateTransporte(record.ID, newValues));
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
          provincias: getSelectList("provincias", provincias.records),
          statuses: getSelectList("statuses", statuses),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default TransporteForm;
