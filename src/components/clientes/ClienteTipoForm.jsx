import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Header from "components/common/Header";
import EditForm from "components/common/EditForm";
import { tipoFields } from "./fields";
import { useSelector, useDispatch } from "react-redux";
import {
  getClienteTipo,
  addClienteTipo,
  updateClienteTipo,
} from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const ClienteTipoForm = (props) => {
  const dispatch = useDispatch();
  const title = `${props.match.params.id ? "Modificando" : "Agregando"} tipo`;
  const tipos = useSelector((state) => state.tipos);
  const [record, setRecord] = useState(
    !props.match.params.id ? props.location.state.record : {}
  );
  const { tipo } = useSelector((state) => state.clientes);

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(getClienteTipo(props.match.params.id));
    }
  }, [props, dispatch]);

  useEffect(() => {
    if (props.match.params.id) {
      setRecord((record) => ({ ...record, ...tipo }));
    }
  }, [props, tipo]);

  const onFinish = (values) => {
    const newValues = cleanFields(tipoFields, values);
    if (!values.ID) {
      dispatch(addClienteTipo(newValues));
    } else {
      dispatch(updateClienteTipo(values.ID, newValues));
    }
    setRecord({});
    props.history.goBack();
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history.goBack} />
      <EditForm
        fields={tipoFields}
        record={record}
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
