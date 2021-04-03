import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import { getTransporte } from "../../redux/actions";
import Info from "../common/Info";
import fields from "./fields";

const Transporte = (props) => {
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const { loading, record, error } = transportes;
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(getTransporte(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const info = fields.map((field) => ({
    title: field.title,
    value: record[field.name],
  }));

  const handleEdit = () => {
    setUrl(`/transportes/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    console.log(props.match.params.id);
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: transportes.record } }}
      />
    );
  }

  return (
    <Layout>
      <Header
        title={"Transporte"}
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

export default Transporte;
