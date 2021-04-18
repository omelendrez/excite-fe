import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addIva, updateIva } from "../../redux/actions";
import { getSelectList, statuses } from "../../utils/helpers";

const IvaForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} iva`;
  const dispatch = useDispatch();
  const ivas = useSelector((state) => state.ivas);
  const { loading, success, error } = ivas;

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addIva(values));
    }
    dispatch(updateIva(record.ID, values));
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
        optionsModels={{ estados: getSelectList("estados", statuses) }}
      />
    </Layout>
  );
};

export default IvaForm;
