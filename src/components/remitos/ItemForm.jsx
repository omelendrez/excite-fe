import React, { useEffect, useState } from "react";
import EditForm from "components/common/EditForm";
import fields from "./itemFields";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem } from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const ItemForm = (props) => {
  const { loading, success, error } = useSelector((state) => state.remitos);
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  const clientes = useSelector((state) => state.clientes);
  const [changeFieldValues, setChangeFieldValues] = useState([]);

  const onFinish = (values) => {
    const newValues = cleanFields(fields, values);
    if (!props.item.ID) {
      return dispatch(addItem(newValues));
    }
    dispatch(updateItem(newValues));
  };

  const getSelectedValue = (value) => {
    const producto = productos.records.find(
      (producto) => producto.PRODCOD === value
    );
    let price = producto.PRODPRE;
    const tipo =
      (clientes.tipos &&
        clientes.tipos.find((tipo) => tipo.TIPCOD === producto.TIPCOD)) ||
      null;
    if (tipo) {
      price = tipo.CLIPRODPRE;
    }
    const newFieldValues = [
      { name: "PRODCOD", value },
      { name: "REMPRE", value: price },
    ];
    setChangeFieldValues(newFieldValues);
  };

  useEffect(() => {
    if (success) {
      props.closeDrawer();
    }
  }, [props, success]);

  return (
    <EditForm
      fields={fields.map((field) => {
        if (field.updater) {
          field.getSelectedValue = getSelectedValue;
        }
        return field;
      })}
      record={props.item}
      onFinish={onFinish}
      maximize={true}
      loading={loading}
      success={success}
      error={error}
      optionsModels={{
        productos: getSelectList("productos", productos.records),
      }}
      changeFieldValues={changeFieldValues}
    />
  );
};

export default ItemForm;
