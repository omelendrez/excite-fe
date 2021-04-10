import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addCliente, updateCliente } from "../../redux/actions";
import { createSelectList } from "../../utils/helpers";

const ClienteEdit = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} cliente`;
  const iva = useSelector((state) => state.iva);
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const { loading, success, error } = clientes;
  const provincias = useSelector((state) => state.provincias);
  const vendedores = useSelector((state) => state.vendedores);

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addCliente(values));
    }
    dispatch(updateCliente(record.ID, values));
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history.goBack} />
      <EditForm
        fields={fields}
        record={record}
        loading={loading}
        success={success}
        error={error}
        onFinish={onFinish}
        optionGroups={{
          interior: [
            { id: "BAHIA BLANCA", text: "BAHIA BLANCA" },
            { id: "INTERIOR", text: "INTERIOR" },
          ],
          iva: createSelectList(iva.records, "IVACOD", "IVADES"),
          provincias: createSelectList(provincias.records, "PROCOD", "PRONOM"),
          vendedores: createSelectList(vendedores.records, "VENCOD", "VENNOM"),
          estado: createSelectList(
            [
              { id: "A", text: "ACTIVO" },
              { id: "I", text: "INACTIVO" },
            ],
            "id",
            "text"
          ),
        }}
      />
    </Layout>
  );
};

export default ClienteEdit;
