import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import Info from "../common/Info";
import notification from "../common/notification";
import { getSubtipo, deleteSubtipo } from "../../redux/actions";
import fields from "./fields";
import { setFields } from "../../utils/helpers";

const Subtipo = (props) => {
  const dispatch = useDispatch();
  const subtipos = useSelector((state) => state.subtipos);
  const { loading, success, record, error } = subtipos;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getSubtipo(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record) {
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [record]);

  useEffect(() => {
    if (success && record.message) {
      notification({
        message: "Registro eliminado",
        description: "El registro fue eliminado con éxito",
        type: "info",
      });
      props.history.goBack();
    }
    if (error) {
      notification({
        message: "Error",
        description: "Error al intentar eliminar el registro",
        type: "error",
      });
    }
  }, [success, record, error, props.history]);

  const handleEdit = () => {
    setUrl(`/subtipos/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteSubtipo(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: subtipos.record } }}
      />
    );
  }

  return (
    <Layout>
      <Header
        title={"Subtipo"}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <Info
        title={info.SUBTIPDES}
        fields={fields}
        data={info}
        onEdit={handleEdit}
        onDelete={handleDelete}
        success={success}
        history={props.history}
      />
    </Layout>
  );
};

export default Subtipo;
