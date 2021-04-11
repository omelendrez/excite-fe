import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import { getCliente, deleteCliente } from "../../redux/actions";
import Info from "../common/Info";
import fields from "./fields";

const Cliente = (props) => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, success, record, error } = clientes;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getCliente(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record) {
      const info = fields.map((field) => ({
        title: field.title,
        value: record[field.name],
      }));
      setInfo(info);
    }
  }, [record]);

  const handleEdit = () => {
    setUrl(`/clientes/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteCliente(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: clientes.record } }}
      />
    );
  }

  return (
    <Layout>
      <Header
        title={"Cliente"}
        onBack={props.history.goBack}
        loading={loading}
      />
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

export default Cliente;
