import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addVendedor, updateVendedor } from "../../redux/actions";
import {
  getSelectList,
  statuses,
  interior,
  cleanFields,
} from "../../utils/helpers";

const VendedorEdit = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} vendedor`;
  const dispatch = useDispatch();
  const vendedores = useSelector((state) => state.vendedores);
  const provincias = useSelector((state) => state.provincias);
  const { loading, success, error } = vendedores;

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!record.ID) {
      dispatch(addVendedor(newValues));
    }
    return dispatch(updateVendedor(record.ID, newValues));
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
          provincias: getSelectList("provincias", provincias.records),
          interior: getSelectList("interior", interior),
          statuses: getSelectList("statuses", statuses),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default VendedorEdit;
