import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import Items from "./Items";
import Info from "../common/Info";
import notification from "../common/notification";
import { getRemito, getItems } from "../../redux/actions";
import fields from "./fields";
import { setFields } from "../../utils/helpers";
import "./remito.css";

const { TabPane } = Tabs;

const Remito = (props) => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, success, record, error } = remitos;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getRemito(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record && record.REMNUM) {
      dispatch(getItems(record.REMNUM));
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [dispatch, record]);

  useEffect(() => {
    if (success && record.message) {
      notification({
        message: "Registro eliminado",
        description: "El registro fue eliminado con éxito",
        type: "success",
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
    setUrl(`/remitos/edit/${props.match.params.id}`);
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: remitos.record } }}
      />
    );
  }

  return (
    <Layout>
      <Header
        title={`Remito ${record.REMNUM}`}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <div className="card-container">
        <Tabs>
          <TabPane tab="Info" key="1">
            <Info
              title={info.REMNUM}
              fields={fields}
              data={info}
              onEdit={handleEdit}
              success={success}
              history={props.history}
            />
          </TabPane>
          <TabPane tab={`Items (${remitos.items.length})`} key="2">
            <Items ID={record.REMNUM} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Remito;
