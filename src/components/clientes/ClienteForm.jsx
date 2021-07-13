import React from "react";
import { Layout } from "antd";
import Header from "components/common/Header";
import EditForm from "components/common/EditForm";
import { fields } from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addCliente, updateCliente } from "redux/actions";
import { getSelectList, statuses, interior, cleanFields } from "utils/helpers";

const ClienteForm = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} cliente`;
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, success, error } = clientes;

  const ivas = useSelector((state) => state.ivas);
  const provincias = useSelector((state) => state.provincias);
  const vendedores = useSelector((state) => state.vendedores);
  const transportes = useSelector((state) => state.transportes);

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);

    if (!record.ID) {
      return dispatch(addCliente(newValues));
    }
    dispatch(updateCliente(record.ID, newValues));
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
        optionsModels={{
          ivas: getSelectList("ivas", ivas.records),
          vendedores: getSelectList("vendedores", vendedores.records),
          statuses: getSelectList("statuses", statuses),
          interior: getSelectList("interior", interior),
          transportes: getSelectList("transportes", transportes.records),
          provincias: getSelectList("provincias", provincias.records),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default ClienteForm;
