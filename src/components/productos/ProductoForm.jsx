import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addProducto, updateProducto } from "../../redux/actions";
import { sortColumn } from "../../utils/helpers";

const ProductoForm = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} producto`;
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipos);
  const subtipos = useSelector((state) => state.subtipos);
  const productos = useSelector((state) => state.productos);
  const { loading, success, error } = productos;

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addProducto(values));
    }
    dispatch(updateProducto(record.ID, values));
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
          tipos: tipos.records
            .sort((a, b) => sortColumn(a, b, "TIPDES"))
            .map((record) => ({
              id: record.TIPCOD,
              text: record.TIPDES,
            })),
          subtipos: subtipos.records
            .sort((a, b) => sortColumn(a, b, "SUBTIPDES"))
            .map((record) => ({
              id: record.SUBTIPCOD,
              text: record.SUBTIPDES,
            })),
          sexos: [
            { id: "", text: "INDEFINIDO" },
            { id: "FEMENINO", text: "FEMENINO" },
            { id: "MASCULINO", text: "MASCULINO" },
          ],
          estado: [
            { id: "A", text: "ACTIVO" },
            { id: "I", text: "INACTIVO" },
          ],
        }}
      />
    </Layout>
  );
};

export default ProductoForm;
