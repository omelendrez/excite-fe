import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Items from "components/common/Items";
import Info from "components/common/Info";
import ItemForm from "components/common/ItemForm";
import notification from "components/common/notification";
import {
  getPago,
  cleanPagoRemito,
  cleanPagoValor,
  getPagoRemito,
  getPagoValor,
  deletePagoRemito,
  deletePagoValor,
  addPagoRemito,
  addPagoValor,
  updatePagoRemito,
  updatePagoValor,
} from "redux/actions";
import { fields, remitosFields, valoresFields } from "./fields";
import {
  setFields,
  getSelectList,
  tiposPago,
  cleanFields,
} from "utils/helpers";

import { remitosColumns, valoresColumns } from "./columns";

const Pago = (props) => {
  const dispatch = useDispatch();
  const pagos = useSelector((state) => state.pagos);
  const { loading, success, record, error, remitos, valores, remito, valor } =
    pagos;
  const [showRemitoDrawer, setShowRemitoDrawer] = useState(false);
  const [showValorDrawer, setShowValorDrawer] = useState(false);
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  const onFinishRemito = (values) => {
    const newValues = cleanFields(remitosFields, values);
    if (!newValues.ID) {
      return dispatch(addPagoRemito(newValues));
    }
    dispatch(updatePagoRemito(newValues));
  };

  const onFinishValor = (values) => {
    const newValues = cleanFields(valoresFields, values);
    if (!newValues.ID) {
      return dispatch(addPagoValor(newValues));
    }
    dispatch(updatePagoValor(newValues));
  };

  const addRemito = () => {
    dispatch(cleanPagoRemito({ PAGNUM: record.PAGNUM }));
    setShowRemitoDrawer(true);
  };

  const addValor = () => {
    dispatch(cleanPagoValor({ PAGNUM: record.PAGNUM }));
    setShowValorDrawer(true);
  };

  const handleClose = () => {
    setShowRemitoDrawer(false);
    setShowValorDrawer(false);
  };

  const handleDeletePago = (record) => {
    dispatch(deletePagoRemito(record.ID));
  };

  const handleEditRemito = (record) => {
    dispatch(getPagoRemito(record.ID));
    setShowRemitoDrawer(true);
  };

  const handleEditValor = (record) => {
    dispatch(getPagoValor(record.ID));
    setShowValorDrawer(true);
  };

  const handleDeleteRemito = (record) => {
    dispatch(deletePagoRemito(record));
  };

  const handleDeleteValor = (record) => {
    dispatch(deletePagoValor(record));
  };

  useEffect(() => {
    dispatch(getPago(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record && record.PAGNUM) {
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

  const commonProps = {
    loading,
    success,
    error,
  };

  const remitosProps = {
    title: "Remitos",
    item: remito,
    items: remitos,
    columns: remitosColumns,
    fields: remitosFields,
    onAdd: addRemito,
    ItemForm,
    showDrawer: showRemitoDrawer,
    handleClose,
    summaryField: "REMTOT",
    handleEdit: handleEditRemito,
    handleDelete: handleDeleteRemito,
    onFinish: onFinishRemito,
  };

  const valoresProps = {
    title: "Valores",
    item: valor,
    items: valores,
    columns: valoresColumns,
    fields: valoresFields,
    onAdd: addValor,
    ItemForm,
    showDrawer: showValorDrawer,
    handleClose,
    summaryField: "PAGIMP",
    handleEdit: handleEditValor,
    handleDelete: handleDeleteValor,
    optionsModels: {
      tiposPago: getSelectList("tiposPago", tiposPago),
    },
    onFinish: onFinishValor,
  };

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
          onDelete={
            remitos.length + valores.length === 0 ? handleDeletePago : null
          }
        />
        <Items {...remitosProps} {...commonProps} />
        <Items {...valoresProps} {...commonProps} />
      </div>
    </Layout>
  );
};

export default Pago;
