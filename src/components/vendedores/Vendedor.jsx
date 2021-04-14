import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import Table from "../common/Table";
import {
  getVendedor,
  deleteVendedor,
  getActiveClientes,
  getIva,
  getProvincias,
  getTransportes,
} from "../../redux/actions";
import Info from "../common/Info";
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
      dispatch(getIva());
      dispatch(getProvincias());
      dispatch(getTransportes());
      const info = fields.map((field) => ({
        title: field.title,
        value: record[field.name],
      }));
      setInfo(info);
    }
  }, [dispatch, record]);

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

  const tableProps = {
    loading,
    columns: clientColumns(),
    dataSource: clientes.active,
    rowKey: "ID",
  };

  return (
    <Layout>
      <Header
        title={"Vendedor"}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <div className="card-container">
        <Tabs>
          <TabPane tab="Info" key="1">
            <Info
              title={info.VENNOM}
              data={info}
              onEdit={handleEdit}
              onDelete={handleDelete}
              success={success}
              history={props.history}
            />
          </TabPane>
          <TabPane tab={`Clientes (${clientes.active.length})`} key="2">
            <Table {...tableProps} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Vendedor;
