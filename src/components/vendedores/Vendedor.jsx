import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import Table from "../common/Table";
import Info from "../common/Info";
import notification from "../common/notification";
import {
  getVendedor,
  getVendedoresProductos,
  deleteVendedor,
  getActiveClientes,
} from "../../redux/actions";
import fields from "./fields";
import { columns as clientColumns } from "../clientes/columns";
const { TabPane } = Tabs;

const Vendedor = (props) => {
  const dispatch = useDispatch();
  const vendedores = useSelector((state) => state.vendedores);
  const { loading, success, record, error } = vendedores;
  const [url, setUrl] = useState("");
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(getVendedor(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record.ID) {
      dispatch(getActiveClientes(record.VENCOD));
      dispatch(getVendedoresProductos(record.VENCOD));
      const info = fields.map((field) => ({
        title: field.title,
        value: record[field.name],
        options: field.options,
        type: field.type,
      }));
      setInfo(info);
    }
  }, [dispatch, record]);

  useEffect(() => {
    if (success && record.message) {
      notification({
        message: "Registro eliminado",
        description: "El registro fue eliminado con éxito",
        type: "info",
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

  const handleEdit = () => {
    setUrl(`/vendedores/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteVendedor(props.match.params.id));
  };

  if (!!url) {
    return (
      <Redirect
        push
        to={{ pathname: url, state: { record: vendedores.record } }}
      />
    );
  }

  const clientesTableProps = {
    loading,
    columns: clientColumns(),
    dataSource: clientes.active,
    rowKey: "ID",
  };

  const productosTableProps = {
    loading,
    columns: [
      {
        title: "Tipo",
        dataIndex: "TIPDES",
      },
      {
        title: "Comisión",
        dataIndex: "VENCOM",
      },
    ],
    dataSource: vendedores.productos,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header
        title={`Vendedor ${record.VENNOM}`}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <div className="card-container">
        <Tabs>
          <TabPane tab="Info" key="1">
            <Info
              title={info.VENNOM}
              fields={fields}
              data={info}
              onEdit={handleEdit}
              onDelete={handleDelete}
              success={success}
              history={props.history}
            />
          </TabPane>
          <TabPane tab={`Clientes (${clientes.active.length})`} key="2">
            <Table {...clientesTableProps} />
          </TabPane>
          <TabPane
            tab={`Productos asociados (${vendedores.productos.length})`}
            key="3"
          >
            <Table {...productosTableProps} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Vendedor;
