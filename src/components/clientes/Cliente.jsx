import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import { getCliente } from "../../redux/actions";
import Info from "../common/Info";
import fields from "./fields";

const Cliente = (props) => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, record, error } = clientes;
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(getCliente(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const info = fields.map((field) => ({
    title: field.title,
    value: record[field.name],
  }));

  const handleEdit = () => {
    setUrl(`/clientes/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    console.log(props.match.params.id);
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
        title={record.TRANOM}
        id={record.ID}
        data={info}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Layout>
  );
};

export default Cliente;
