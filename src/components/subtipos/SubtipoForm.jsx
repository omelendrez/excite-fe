import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { addSubtipo, updateSubtipo } from "../../redux/actions";
import { getSelectList, statuses } from "../../utils/helpers";

const SubtipoForm = (props) => {
  const record = props.record || props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} subtipo`;
  const dispatch = useDispatch();
  const subtipos = useSelector((state) => state.subtipos);
  const { loading, success, error } = subtipos;
  const tipos = useSelector((state) => state.tipos);

  const onFinish = (values) => {
    if (!record.ID) {
      return dispatch(addSubtipo(values));
    }
    dispatch(updateSubtipo(record.ID, values));
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
          tipos: getSelectList("tipos", tipos.records),
          estados: getSelectList("estados", statuses),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default SubtipoForm;
