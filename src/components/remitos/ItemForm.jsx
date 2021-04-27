import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./itemFields";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem } from "../../redux/actions";
import { getSelectList, cleanFields } from "../../utils/helpers";

const ItemForm = (props) => {
  const { item } = useSelector((state) => state.remitos);
  const title = `${item.ID ? "Modificando" : "Agregando"} item`;
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!item.ID) {
      return dispatch(addItem(newValues));
    }
    dispatch(updateItem(item.ID, newValues));
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history && props.history.goBack} />
      <EditForm
        fields={fields}
        record={item}
        onFinish={onFinish}
        maximize={props.maximize}
        optionsModels={{
          productos: getSelectList("productos", productos.records),
        }}
        history={props.history}
      />
    </Layout>
  );
};

export default ItemForm;
