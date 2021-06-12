import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Items from "components/common/Items";
import Info from "components/common/Info";
import ItemForm from "./ItemForm";
import notification from "components/common/notification";
import { getPago } from "redux/actions";
import { fields, remitosFields } from "./fields";
import { setFields } from "utils/helpers";
import { remitosColumns, valoresColumns } from "./columns";

const Pago = (props) => {
  const dispatch = useDispatch();
  const pagos = useSelector((state) => state.pagos);
  const { loading, success, record, error, remitos, valores } = pagos;
  const [showRemitoDrawer, setShowRemitoDrawer] = useState(false);
  const [showValorDrawer, setShowValorDrawer] = useState(false);
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  const addRemito = () => {
    setShowRemitoDrawer(true);
  };

  const addValor = () => {
    setShowValorDrawer(true);
  };

  const handleClose = () => {
    setShowRemitoDrawer(false);
    setShowValorDrawer(false);
  };

  useEffect(() => {
    dispatch(getPago(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record && record.PAGNUM) {
      const info = setFields(fields, record);
      console.log(info);
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

  return (
    <Layout>
      <Header
        title={`Pago ${record.PAGNUM}`}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <div className="card-container">
        <Info
          title={info.PAGNUM}
          fields={fields}
          data={info}
          success={success}
        />
        <Items
          title="Remitos"
          loading={loading}
          error={error}
          items={remitos}
          columns={remitosColumns}
          fields={remitosFields}
          onAdd={addRemito}
          ItemForm={ItemForm}
          showDrawer={showRemitoDrawer}
          handleClose={handleClose}
        />
        <Items
          title="Valores"
          loading={loading}
          error={error}
          items={valores}
          columns={valoresColumns}
          fields={remitosFields}
          onAdd={addValor}
          ItemForm={ItemForm}
          showDrawer={showValorDrawer}
          handleClose={handleClose}
        />
      </div>
    </Layout>
  );
};

export default Pago;
