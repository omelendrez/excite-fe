import React, { useEffect } from "react";
import EditForm from "components/common/EditForm";
import fields from "./itemFields";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem } from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const ItemForm = (props) => {
  const { loading, success, error } = useSelector((state) => state.remitos);
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!props.item.ID) {
      return dispatch(addItem(newValues));
    }
    dispatch(updateItem(newValues));
  };

  useEffect(() => {
    if (success) {
      props.closeDrawer();
    }
  }, [props, success]);

  return (
    <EditForm
      fields={fields}
      record={props.item}
      onFinish={onFinish}
      maximize={true}
      loading={loading}
      success={success}
      error={error}
      optionsModels={{
        productos: getSelectList("productos", productos.records),
      }}
    />
  );
};

export default ItemForm;
