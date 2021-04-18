import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import { getIva, deleteIva } from "../../redux/actions";
import Info from "../common/Info";
import fields from "./fields";

const Iva = (props) => {
  const dispatch = useDispatch();
  const ivas = useSelector((state) => state.ivas);
  const { loading, success, record, error } = ivas;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getIva(props.match.params.id));
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
    setUrl(`/ivas/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteIva(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect push to={{ pathname: url, state: { record: ivas.record } }} />
    );
  }

  return (
    <Layout>
      <Header title={"Iva"} onBack={props.history.goBack} loading={loading} />
      {error && <Alert message="Error" description={error} type="error" />}
      <Info
        title={info.IVADES}
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

export default Iva;
