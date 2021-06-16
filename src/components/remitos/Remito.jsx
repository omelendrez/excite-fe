import React, { useEffect, useState } from "react";
import { Layout, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Items from "./Items";
import Info from "components/common/Info";
import notification from "components/common/notification";
import { getRemito, getItems, deleteRemito } from "redux/actions";
import fields from "./fields";
import { setFields } from "utils/helpers";
import "./remito.css";

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

  const handleDelete = () => {
    dispatch(deleteRemito(props.match.params.id));
  };

  const handlePrint = () => {
    console.log("Printing...");
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
        <Info
          title={info.REMNUM}
          fields={fields}
          data={info}
          onDelete={remitos.items.length === 0 ? handleDelete : null}
          success={success}
          onPrint={handlePrint}
        />
        <Divider />
        <Items ID={record.REMNUM} />
      </div>
    </Layout>
  );
};

export default Remito;
