import React, { useEffect, useState } from "react";
import { Layout, Collapse, Divider, Statistic, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Drawer from "components/common/Drawer";
import Items from "components/common/Items";
import Info from "components/common/Info";
import ItemForm from "components/common/ItemForm";
import Table from "components/common/Table";
import SaveButton from "components/common/SaveButton";
import {
  getPago,
  deletePago,
  cleanPagoValor,
  getPagoValor,
  deletePagoRemito,
  deletePagoValor,
  addPagoRemito,
  addPagoValor,
  updatePagoValor,
} from "redux/actions";
import { fields, remitosFields, valoresFields } from "./fields";
import {
  setFields,
  getSelectList,
  tiposPago,
  cleanFields,
} from "utils/helpers";
import {
  remitosColumns,
  valoresColumns,
  pendingRemitosColumns,
} from "./columns";

const { Panel } = Collapse;

const Pago = (props) => {
  const dispatch = useDispatch();
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const pagos = useSelector((state) => state.pagos);
  const {
    loading,
    success,
    record,
    error,
    remitos,
    valores,
    valor,
    pendingRemitos,
  } = pagos;

  const [showValorDrawer, setShowValorDrawer] = useState(false);
  const [showRemitoDrawer, setShowRemitoDrawer] = useState(false);
  const [valorItem, setValorItem] = useState({});
  const [selectedRemitos, setSelectedRemitos] = useState([]);
  const [info, setInfo] = useState(infoDefault);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    dispatch(getPago(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    const totRemitos =
      remitos.length > 0
        ? remitos.reduce((acc, cur) => acc + cur.REMTOT, 0)
        : 0;
    const totValores =
      valores.length > 0
        ? valores.reduce((acc, cur) => acc + cur.PAGIMP, 0)
        : 0;
    setBalance(totValores - totRemitos);

    if (record && record.PAGNUM) {
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [dispatch, record, remitos, valores]);

  useEffect(() => {
    const onFinishValor = (values) => {
      const newValues = cleanFields(valoresFields, values);
      if (!newValues.ID) {
        return dispatch(addPagoValor(newValues));
      }
      dispatch(updatePagoValor(newValues));
    };

    if (valor.PAGNUM) {
      setValorItem({
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
    setShowRemitoDrawer(true);
  };

  const addValor = () => {
    dispatch(cleanPagoValor({ PAGNUM: record.PAGNUM }));
    setShowValorDrawer(true);
  };

  const handleValorClose = () => {
    setShowValorDrawer(false);
  };

  const handleRemitosClose = () => {
    setShowRemitoDrawer(false);
  };

  const handleDeletePago = () => {
    dispatch(deletePago(props.match.params.id));
  };

  const handlePrintPago = () => {
    console.log("Printing...");
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

  const guardarRemitos = () => {
    selectedRemitos.forEach((id) => {
      dispatch(addPagoRemito({ PAGNUM: record.PAGNUM, REMNUM: id }));
    });
    setSelectedRemitos([]);
    setShowRemitoDrawer(false);
  };

  const commonProps = {
    loading,
    success,
  };

  const remitosProps = {
    items: remitos,
    columns: remitosColumns,
    fields: remitosFields,
    onAdd: addRemito,
    summaryField: "REMTOT",
    handleDelete: handleDeleteRemito,
  };

  const valoresProps = {
    items: valores,
    columns: valoresColumns,
    fields: valoresFields,
    onAdd: addValor,
    summaryField: "PAGIMP",
    handleEdit: handleEditValor,
    handleDelete: handleDeleteValor,
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRemitos(selectedRowKeys);
    },
  };

  const pendingRemitosProps = {
    loading,
    columns: pendingRemitosColumns(),
    dataSource: pendingRemitos,
    rowKey: "REMNUM",
    pagination: false,
    size: "small",
    rowSelection,
  };

  return (
    <Layout>
      <Header
        title={`Pago ${record.PAGNUM}`}
        onBack={props.history.goBack}
        loading={loading}
      />
      <Row>
        <Col offset={20}>
          <Statistic
            value={balance}
            precision={2}
            loading={loading}
            title="Balance"
            valueStyle={balance < 0 ? { color: "#cf1322" } : {}}
          />
        </Col>
      </Row>

      {error && <Alert message="Error" description={error} type="error" />}
      <div className="card-container">
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel key="1" header="Detalle" className="panel">
            <Info
              title={info.PAGNUM}
              fields={fields}
              data={info}
              success={success}
              onDelete={
                remitos.length + valores.length === 0 ? handleDeletePago : null
              }
              onPrint={
                remitos.length + valores.length !== 0 ? handlePrintPago : null
              }
            />
          </Panel>
        </Collapse>
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel key="1" header="Presupuestos">
            <Items {...remitosProps} {...commonProps} />
          </Panel>
        </Collapse>
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel key="1" header="Valores">
            <Items {...valoresProps} {...commonProps} />
          </Panel>
        </Collapse>
      </div>
      <Drawer
        isDrawerVisible={showValorDrawer}
        handleClose={handleValorClose}
        title={`${valorItem.ID ? "Modificando" : "Agregando"} registro`}
      >
        {valorItem.fields && (
          <ItemForm
            closeDrawer={handleValorClose}
            item={valor}
            success={success}
            error={error}
            loading={loading}
            fields={valorItem.fields}
            optionsModels={valorItem.optionsModels}
            onFinish={valorItem.onFinish}
          />
        )}
      </Drawer>
      <Drawer
        isDrawerVisible={showRemitoDrawer}
        handleClose={handleRemitosClose}
        title="Presupuestos"
      >
        <Table {...pendingRemitosProps} />
        {pendingRemitos.length > 0 && (
          <>
            <Divider />
            <SaveButton onClick={guardarRemitos} />
          </>
        )}
      </Drawer>
    </Layout>
  );
};

export default Pago;
