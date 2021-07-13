import React from "react";
import { Layout } from "antd";
import Header from "components/common/Header";
import EditForm from "components/common/EditForm";
import { tipoFields } from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addClienteTipo, updateClienteTipo } from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const ClienteTipoForm = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} tipo`;
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, success, error } = clientes;

  const tipos = useSelector((state) => state.tipos);

  const onFinish = (values) => {
    const newValues = cleanFields(tipoFields, values);

    if (!record.ID) {
      return dispatch(addClienteTipo(newValues));
    }
    dispatch(updateClienteTipo(record.ID, newValues));
  };

  console.log(record);

  return (
    <Layout>
      <Header title={title} onBack={props.history.goBack} />
      <EditForm
        fields={tipoFields}
        record={record}
        loading={loading}
        success={success}
        error={error}
        onFinish={onFinish}
        optionsModels={{
          tipos: getSelectList("tipos", tipos.records),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default ClienteTipoForm;
