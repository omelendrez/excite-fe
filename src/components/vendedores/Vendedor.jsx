import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import { getVendedor } from "../../redux/actions";
import Info from "../common/Info";
import fields from "./fields";

const Vendedor = (props) => {
  const dispatch = useDispatch();
  const Vendedores = useSelector((state) => state.Vendedores);
  const { loading, record, error } = Vendedores;
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(getVendedor(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const info = fields.map((field) => ({
    title: field.title,
    value: record[field.name],
  }));

  const handleEdit = () => {
    setUrl(`/Vendedores/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    console.log(props.match.params.id);
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: Vendedores.record } }}
      />
    );
  }

  return (
    <Layout>
      <Header
        title={"Vendedor"}
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

export default Vendedor;
