import React, { useEffect, useState } from "react";
import { Layout, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Items from "./Items";
import Info from "components/common/Info";
import notification from "components/common/notification";
import { getRemito, getItems, deleteRemito, getCliente } from "redux/actions";
import fields from "./fields";
import { setFields } from "utils/helpers";
import "./remito.css";

const { TabPane } = Tabs;

const Remito = (props) => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, success, record, error } = remitos;
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
      dispatch(getCliente(record.CLICOD));
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
    }
    if (error) {
      notification({
        message: "Error",
        description: "Error al intentar eliminar el registro",
        type: "error",
      });
    }
  }, [success, record, error, props.history]);

  const handleDelete = () => {
    dispatch(deleteRemito(props.match.params.id));
  };

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
              onDelete={remitos.items.length === 0 ? handleDelete : null}
              success={success}
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
