import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Typography, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Table from "components/common/Table";
import Info from "components/common/Info";
import ClientBalance from "components/common/ClientBalance";
import notification from "components/common/notification";
import { getCliente, deleteCliente, deleteClienteTipo } from "redux/actions";
import { fields } from "./fields";
import { setFields } from "utils/helpers";
import { tiposColumns } from "./columns";

const { Title } = Typography;

const Cliente = (props) => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, success, record, error, tipos, saldos } = clientes;
  const [redirect, setRedirect] = useState({});
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
    if (error) {
      notification({
        message: "Error",
        description: "Error al intentar eliminar el registro",
        type: "error",
      });
    }
    setRedirect({});
  }, [success, record, error, tipos]);

  const handleEdit = () => {
    setRedirect({
      pathname: `/clientes/edit/${props.match.params.id}`,
      state: { record: clientes.record },
    });
  };

  const handleDelete = () => {
    dispatch(deleteCliente(props.match.params.id));
  };

  const handlePayments = () => {
    setRedirect({
      pathname: "/pagos",
    });
  };

  const handleQuotations = () => {
    setRedirect({
      pathname: "/remitos",
    });
  };

  const handleConcepts = () => {
    setRedirect({
      pathname: "/conceptos",
    });
  };
  if (!!redirect.pathname) {
    return <Redirect push to={redirect} />;
  }

  const onAddTipo = () => {
    setRedirect({
      pathname: "/clientes/add/tipo",
      state: { record: { CLICOD: record.CLICOD } },
    });
  };

  const onEditTipo = (record) => {
    setRedirect({
      pathname: `/clientes/edit/tipo/${record.ID}`,
    });
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
      <Divider />
      <Title level={4}>Precios especiales</Title>

      <Table {...tiposTableProps} />
      <Divider />
      <Title level={4}>Saldos</Title>

      <ClientBalance columns={newSaldos} />
    </Layout>
  );
};

export default Cliente;
