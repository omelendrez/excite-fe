import React, { useEffect, useState } from "react";
import { Layout, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Items from "./Items";
import Info from "components/common/Info";
import Modal from "components/common/Modal";
import Presupuesto from "components/reportes/presupuesto/Presupuesto";
import notification from "components/common/notification";
import { getRemito, getItems, deleteRemito } from "redux/actions";
import fields from "./fields";
import { setFields } from "utils/helpers";
import "./remito.scss";

const { Panel } = Collapse;

const Remito = (props) => {
  const dispatch = useDispatch();
  const remitos = useSelector((state) => state.remitos);
  const { loading, success, record, error } = remitos;
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);
  const [showPrint, setShowPrint] = useState(false);

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
    setShowPrint(!showPrint);
  };

  return (
    <>
      <Layout>
        <Header
          title={`Presupuesto ${record.REMNUM}`}
          onBack={props.history.goBack}
          loading={loading}
        />
        {error && <Alert message="Error" description={error} type="error" />}
        <div className="card-container no-print">
          <Collapse defaultActiveKey={["1"]} ghost>
            <Panel key="1" header="Detalle">
              <Info
                fields={fields}
                data={info}
                onDelete={remitos.items.length === 0 ? handleDelete : null}
                success={success}
                onPrint={remitos.items.length !== 0 ? handlePrint : null}
              />
            </Panel>
          </Collapse>
          <Collapse defaultActiveKey={["1"]} ghost>
            <Panel key="1" header="Productos">
              <Items ID={record.REMNUM} />
            </Panel>
          </Collapse>
        </div>
      </Layout>
      <Modal
        isModalVisible={showPrint}
        onClose={handlePrint}
        width="900px"
        okText="Imprimir"
        onOk={() => window.print()}
      >
        <Presupuesto title={record.REMNUM} />
      </Modal>
    </>
  );
};

export default Remito;
