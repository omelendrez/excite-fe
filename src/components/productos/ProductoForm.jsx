import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addProducto, updateProducto } from "../../redux/actions";
import {
  getSelectList,
  statuses,
  sexos,
  cleanFields,
} from "../../utils/helpers";

const ProductoForm = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} producto`;
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipos);
  const subtipos = useSelector((state) => state.subtipos);
  const productos = useSelector((state) => state.productos);
  const { loading, success, error } = productos;

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!record.ID) {
      return dispatch(addProducto(newValues));
    }
    dispatch(updateProducto(record.ID, newValues));
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
        optionsModels={{
          tipos: getSelectList("tipos", tipos.records),
          subtipos: getSelectList("subtipos", subtipos.records),
          sexos: getSelectList("sexos", sexos),
          estados: getSelectList("estados", statuses),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default ProductoForm;
