import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import { getProducto, deleteProducto } from "../../redux/actions";
import Info from "../common/Info";
import fields from "./fields";

const Producto = (props) => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  const { loading, success, record, error } = productos;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getProducto(props.match.params.id));
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

  const handleEdit = () => {
    setUrl(`/productos/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteProducto(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: productos.record } }}
      />
    );
  }

  return (
    <Layout>
      <Header
        title={"Producto"}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <Info
        title={info.PRODES}
        fields={fields}
        data={info}
        record={record}
        onEdit={handleEdit}
        onDelete={handleDelete}
        success={success}
        history={props.history}
      />
    </Layout>
  );
};

export default Producto;
