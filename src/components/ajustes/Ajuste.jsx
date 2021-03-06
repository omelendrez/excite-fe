import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import notification from "components/common/notification";
import Info from "components/common/Info";
import { getAjuste, deleteAjuste } from "redux/actions";
import fields from "./fields";
import { setFields } from "utils/helpers";

const Ajuste = (props) => {
  const dispatch = useDispatch();
  const ajustes = useSelector((state) => state.ajustes);
  const { loading, success, record, error } = ajustes;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getAjuste(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record) {
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [record]);

  useEffect(() => {
    if (success && record.message) {
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
    setUrl(`/ajustes/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteAjuste(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: ajustes.record } }}
      />
    );
  }

  return (
    <Layout>
      <Header
        title={"Ajuste"}
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

export default Ajuste;
