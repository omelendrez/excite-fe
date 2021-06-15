import React from "react";
import { Layout } from "antd";
import Header from "components/common/Header";
import EditForm from "components/common/EditForm";
import { fields } from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addPago } from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const PagoForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} pago`;

  const dispatch = useDispatch();
  const pagos = useSelector((state) => state.pagos);
  const { loading, success, error } = pagos;
  const clientes = useSelector((state) => state.clientes);

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!record.ID) {
      dispatch(addPago(newValues));
    }
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history && props.history.goBack} />
      <EditForm
        fields={fields}
        record={record}
        loading={loading}
        success={success}
        error={error}
        onFinish={onFinish}
        maximize={props.maximize}
        optionsModels={{
          clientes: getSelectList("clientes", clientes.records),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default PagoForm;
