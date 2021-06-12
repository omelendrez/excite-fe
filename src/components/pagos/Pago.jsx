import React, { useEffect, useState } from "react";
import { Layout, Table as AntdTable, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Items from "components/common/Items";
import Info from "components/common/Info";
import ItemForm from "./ItemForm";
import notification from "components/common/notification";
import { getPago } from "redux/actions";
import { fields, remitosFields, valoresFields } from "./fields";
import { setFields, formatAmount } from "utils/helpers";
import { remitosColumns, valoresColumns } from "./columns";

const { Text } = Typography;

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

  const handleEditRemito = (record) => {
    console.log(record);
    setShowRemitoDrawer(true);
  };

  const handleDeleteRemito = (record) => {
    console.log(record);
  };

  const handleEditValor = (record) => {
    console.log(record);
    setShowValorDrawer(true);
  };

  const handleDeleteValor = (record) => {
    console.log(record);
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

  const remitosSummary = (pageData) => {
    let totalAmount = 0;
    pageData.forEach((item) => {
      totalAmount += item.REMTOT;
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={2}>
          <Text type="primary">{formatAmount(totalAmount)}</Text>
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    );
  };

  const valoresSummary = (pageData) => {
    let totalAmount = 0;
    pageData.forEach((item) => {
      totalAmount += item.PAGIMP;
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={2}>
          <Text type="primary">{formatAmount(totalAmount)}</Text>
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    );
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
          summary={remitosSummary}
          handleEdit={handleEditRemito}
          handleDelete={handleDeleteRemito}
        />
        <Items
          title="Valores"
          loading={loading}
          error={error}
          items={valores}
          columns={valoresColumns}
          fields={valoresFields}
          onAdd={addValor}
          ItemForm={ItemForm}
          showDrawer={showValorDrawer}
          handleClose={handleClose}
          summary={valoresSummary}
          handleEdit={handleEditValor}
          handleDelete={handleDeleteValor}
        />
      </div>
    </Layout>
  );
};

export default Pago;
