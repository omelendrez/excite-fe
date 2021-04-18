import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import Info from "../common/Info";
import notification from "../common/notification";
import { getTipo, deleteTipo } from "../../redux/actions";
import fields from "./fields";

const Tipo = (props) => {
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipos);
  const { loading, success, record, error } = tipos;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getTipo(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record) {
      const info = fields.map((field) => ({
        title: field.title,
        value: record[field.name],
        options: field.options,
      }));
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
    setUrl(`/tipos/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteTipo(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect push to={{ pathname: url, state: { record: tipos.record } }} />
    );
  }

  return (
    <Layout>
      <Header title={"Tipo"} onBack={props.history.goBack} loading={loading} />
      {error && <Alert message="Error" description={error} type="error" />}
      <Info
        title={info.TRANOM}
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

export default Tipo;
