import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addVendedor, updateVendedor } from "../../redux/actions";
import { createSelectList, statuses, interior } from "../../utils/helpers";

const VendedorEdit = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} vendedor`;
  const dispatch = useDispatch();
  const vendedores = useSelector((state) => state.vendedores);
  const provincias = useSelector((state) => state.provincias);
  const { loading, success, error } = vendedores;

  const onFinish = (values) => {
    if (!record.ID) {
      dispatch(addVendedor(values));
    }
    return dispatch(updateVendedor(record.ID, values));
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
          provincias: createSelectList(provincias.records, "PROCOD", "PRONOM"),
          interior: createSelectList(interior, "id", "text"),
          estados: createSelectList(statuses, "id", "text"),
        }}
      />
    </Layout>
  );
};

export default VendedorEdit;
