import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Drawer from "components/common/Drawer";
import Items from "components/common/Items";
import Info from "components/common/Info";
import ItemForm from "components/common/ItemForm";

import {
  getPago,
  deletePago,
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
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const pagos = useSelector((state) => state.pagos);
  const { loading, success, record, error, remitos, valores, remito, valor } =
    pagos;
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [info, setInfo] = useState(infoDefault);

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
    const onFinishRemito = (values) => {
      const newValues = cleanFields(remitosFields, values);
      if (!newValues.ID) {
        return dispatch(addPagoRemito(newValues));
      }
      dispatch(updatePagoRemito(newValues));
    };

    if (remito.PAGNUM) {
      setCurrentItem({
        item: remito,
        onFinish: onFinishRemito,
        fields: remitosFields,
      });
    }
  }, [dispatch, remito]);

  useEffect(() => {
    const onFinishValor = (values) => {
      const newValues = cleanFields(valoresFields, values);
      if (!newValues.ID) {
        return dispatch(addPagoValor(newValues));
      }
      dispatch(updatePagoValor(newValues));
    };

    if (valor.PAGNUM) {
      setCurrentItem({
        item: valor,
        onFinish: onFinishValor,
        fields: valoresFields,
        optionsModels: {
          tiposPago: getSelectList("tiposPago", tiposPago),
        },
      });
    }
  }, [dispatch, valor]);

  useEffect(() => {
    if (success && record.message) {
      props.history.goBack();
    }
  }, [success, record, props.history]);

  const addRemito = () => {
    dispatch(cleanPagoRemito({ PAGNUM: record.PAGNUM }));
    setShowDrawer(true);
  };

  const addValor = () => {
    dispatch(cleanPagoValor({ PAGNUM: record.PAGNUM }));
    setShowDrawer(true);
  };

  const handleClose = () => {
    setShowDrawer(false);
  };

  const handleDeletePago = () => {
    dispatch(deletePago(props.match.params.id));
  };

  const handleEditRemito = (record) => {
    dispatch(getPagoRemito(record.ID));
    setShowDrawer(true);
  };

  const handleEditValor = (record) => {
    dispatch(getPagoValor(record.ID));
    setShowDrawer(true);
  };

  const handleDeleteRemito = (record) => {
    dispatch(deletePagoRemito(record));
  };

  const handleDeleteValor = (record) => {
    dispatch(deletePagoValor(record));
  };

  const commonProps = {
    loading,
    success,
    error,
  };

  const remitosProps = {
    title: "Remitos",
    items: remitos,
    columns: remitosColumns,
    fields: remitosFields,
    onAdd: addRemito,
    summaryField: "REMTOT",
    handleEdit: handleEditRemito,
    handleDelete: handleDeleteRemito,
  };

  const valoresProps = {
    title: "Valores",
    items: valores,
    columns: valoresColumns,
    fields: valoresFields,
    onAdd: addValor,
    summaryField: "PAGIMP",
    handleEdit: handleEditValor,
    handleDelete: handleDeleteValor,
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
      <Drawer
        isDrawerVisible={showDrawer}
        handleClose={handleClose}
        title={`${
          currentItem && currentItem.ID ? "Modificando" : "Agregando"
        } registro`}
      >
        {currentItem.fields && (
          <ItemForm
            closeDrawer={handleClose}
            item={currentItem.item}
            success={success}
            error={error}
            loading={loading}
            fields={currentItem.fields}
            optionsModels={currentItem.optionsModels}
            onFinish={currentItem.onFinish}
          />
        )}
      </Drawer>
    </Layout>
  );
};

export default Pago;
