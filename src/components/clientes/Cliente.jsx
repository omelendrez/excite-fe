import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Table from "components/common/Table";
import Info from "components/common/Info";
import ClientBalance from "components/common/ClientBalance";
import notification from "components/common/notification";
import {
  getCliente,
  deleteCliente,
  getClienteTipo,
  deleteClienteTipo,
} from "redux/actions";
import { fields } from "./fields";
import { setFields } from "utils/helpers";
import { tiposColumns } from "./columns";

const { TabPane } = Tabs;

const Cliente = (props) => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, success, record, error, tipo, tipos, saldos } = clientes;
  const [url, setUrl] = useState("");
  const [tipoUrl, setTipoUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getCliente(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record) {
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [record]);

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

  useEffect(() => {
    if (tipo.ID) setTipoUrl(`/clientes/edit/tipo/${tipo.ID}`);
  }, [tipo]);

  const handleEdit = () => {
    setUrl(`/clientes/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteCliente(props.match.params.id));
  };

  const handlePayments = () => {
    setUrl("/pagos");
  };

  const handleQuotations = () => {
    setUrl("/remitos");
  };

  const handleConcepts = () => {
    setUrl("/conceptos");
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: clientes.record } }}
      />
    );
  }

  if (!!tipoUrl) {
    return (
      <Redirect push to={{ pathname: tipoUrl, state: { record: tipo } }} />
    );
  }

  const onAddTipo = () => {
    setTipoUrl(`/clientes/add/tipo`);
  };

  const onEditTipo = (record) => {
    dispatch(getClienteTipo(record.ID));
  };

  const onDeleteTipo = (record) => {
    dispatch(deleteClienteTipo(record.ID));
  };

  const tiposTableProps = {
    loading,
    columns: tiposColumns({
      handleEdit: onEditTipo,
      handleDelete: onDeleteTipo,
    }),
    dataSource: tipos,
    rowKey: "ID",
    onAdd: onAddTipo,
  };

  const balance = saldos.reduce((acc, cur) => acc + cur.AMOUNT, 0);
  const newSaldos = [...saldos, { TYPE: "Balance Actual", AMOUNT: balance }];

  return (
    <Layout>
      <Header
        title={`Cliente ${record.CLINOM}`}
        onBack={props.history.goBack}
        loading={loading}
      />

      {error && <Alert message="Error" description={error} type="error" />}
      <Tabs tabPosition="right">
        <TabPane tab="Info" key="1">
          <Info
            title={`${info[0].value} - ${info[2].value}`}
            fields={fields}
            data={info}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPayments={handlePayments}
            onQuotations={handleQuotations}
            onConcepts={handleConcepts}
            success={success}
            history={props.history}
            loading={loading}
          />
        </TabPane>
        {!!tipos.length && (
          <TabPane tab={`Precios especiales (${tipos.length})`} key="2">
            <Table {...tiposTableProps} />
          </TabPane>
        )}
        <TabPane tab="Balance" key="3">
          <ClientBalance columns={newSaldos} />
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default Cliente;
