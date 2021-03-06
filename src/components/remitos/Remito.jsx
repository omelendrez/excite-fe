import React, { useEffect, useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Collapse, Form, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Items from "./Items";
import Info from "components/common/Info";
import Modal from "components/common/Modal";
import InputField from "components/common/InputField";
import notification from "components/common/notification";
import {
  getRemito,
  updateRemito,
  deleteRemito,
  getCliente,
} from "redux/actions";
import { fields } from "./fields";
import { setFields, formatAmount } from "utils/helpers";
import "./remito.scss";

const { Panel } = Collapse;

const Remito = (props) => {
  const defaultItemRecord = [
    { name: "REMPER", value: 0 },
    { name: "REMDES", value: 0 },
    { name: "ID", value: 0 },
  ];
  const discountForm = useRef(null);
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { records: clientes } = useSelector((state) => state.clientes);
  const { loading, success, record, error, items } = remitos;
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);
  const [showDiscount, setShowDiscount] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [netItems, setNetItems] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [itemRecord, setItemRecord] = useState(defaultItemRecord);
  const [defaultItemValues, setDefaultItemValues] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(getRemito(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    setDefaultItemValues([
      {
        name: "REMPER",
        value: Math.round((record.REMDES / totalItems) * 100, 1),
      },
      { name: "REMDES", value: record.REMDES },
      { name: "ID", value: record.ID },
    ]);
    setDiscount(record.REMDES);
    setNetItems(totalItems - record.REMDES);
  }, [totalItems, record]);

  useEffect(() => {
    if (record && record.REMNUM) {
      dispatch(getCliente(record.CLICOD));
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [dispatch, record, clientes]);

  useEffect(() => {
    if (items) {
      const newTotalItems = items.reduce(
        (acc, cur) => acc + cur.REMPRE * cur.REMCAN,
        0
      );
      setTotalItems(newTotalItems);
      setNetItems(newTotalItems);
    }
  }, [items]);

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

  const handleDelete = () => {
    dispatch(deleteRemito(props.match.params.id));
  };

  const handlePrint = () => {
    setUrl("/remitos/remito/reporte");
  };

  const handleDiscount = () => {
    setItemRecord(defaultItemValues);
    setDiscount(record.REMDES);
    setNetItems(totalItems - record.REMDES);
    setShowDiscount(!showDiscount);
  };

  const confirmDiscount = () => {
    const update = {};
    itemRecord
      .filter((i) => i.name !== "REMPER")
      .forEach((i) => (update[i.name] = i.value));
    dispatch(updateRemito(update));
    setItemRecord(defaultItemValues);
    setDiscount(record.REMDES);
    setNetItems(totalItems - record.REMDES);
    setShowDiscount(!showDiscount);
  };

  const handleChange = (field, value) => {
    if (!value) value = 0;
    switch (field) {
      case "REMPER":
        const newDiscount = (totalItems * value) / 100;
        setDiscount(newDiscount);
        setNetItems(totalItems - newDiscount);
        setItemRecord([
          { name: "REMPER", value },
          { name: "REMDES", value: newDiscount },
          { name: "ID", value: record.ID },
        ]);
        break;
      case "REMDES":
        setDiscount(value);
        setNetItems(totalItems - value);
        setItemRecord([
          { name: "REMPER", value: Math.round((value / totalItems) * 100, 1) },
          { name: "REMDES", value },
          { name: "ID", value: record.ID },
        ]);
        break;
      default:
    }
  };

  const discountFields = [
    {
      name: "ID",
      hidden: true,
    },
    {
      name: "REMPER",
      title: "Desc. %",
      onChange: (value) => handleChange("REMPER", value),
      type: "percent",
    },
    {
      name: "REMDES",
      title: "Desc. $",
      onChange: (value) => handleChange("REMDES", value),
      type: "amount",
      width: "100%",
    },
  ];

  useEffect(() => {
    if (discountForm.current) {
      itemRecord.forEach((item) => discountForm.current.setFields([item]));
    }
  }, [itemRecord]);

  const itemsTableProps = {
    loading,
    error,
    items,
    discount,
    rowKey: "ID",
    path: props.location.pathname,
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{
          pathname: url,
        }}
      />
    );
  }
  return (
    <>
      <Layout>
        <Header
          title={`Presupuesto ${record.REMNUM}`}
          onBack={props.history.goBack}
          loading={loading}
        />
        {error && <Alert message="Error" description={error} type="error" />}
        <div className="card-container no-Discount">
          <Collapse defaultActiveKey={["1"]} ghost>
            <Panel key="1" header="Detalle">
              <Info
                fields={fields}
                data={info}
                onDelete={items.length === 0 ? handleDelete : null}
                success={success}
                onPrint={items.length !== 0 ? handlePrint : null}
                onDiscount={items.length !== 0 ? handleDiscount : null}
              />
            </Panel>
          </Collapse>
          <Collapse defaultActiveKey={["1"]} ghost>
            <Panel key="1" header="Productos">
              <Items {...itemsTableProps} />
            </Panel>
          </Collapse>
        </div>
      </Layout>
      <Modal
        isModalVisible={showDiscount}
        onClose={handleDiscount}
        width="370px"
        okText="Confirmar"
        onOk={() => discountForm.current.submit()}
        title="Descuento"
        forceRender
      >
        <Form ref={discountForm} onFinish={confirmDiscount}>
          {discountFields.map((field) => (
            <InputField field={field} key={field.name} />
          ))}
        </Form>
        <Row>
          <Col span={10}>Total Presupuesto</Col>
          <Col span={11}>
            <div className="total">{formatAmount(totalItems)}</div>
          </Col>
        </Row>
        <Row>
          <Col span={10}>Total Descuento</Col>
          <Col span={11}>
            <div className="total">{formatAmount(discount)}</div>
          </Col>
        </Row>
        <Row>
          <Col span={10}>Neto Presupuesto</Col>
          <Col span={11}>
            <div className="total">{formatAmount(netItems)}</div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default Remito;
