import React, { useEffect, useState } from "react";
import { Alert, Divider, Space } from "antd";
import EditForm from "components/common/EditForm";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem } from "redux/actions";
import { getSelectList, cleanFields } from "utils/helpers";

const ItemForm = (props) => {
  const { fields } = props;
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
    <>
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
      <Divider />
      {clientes.tipos && clientes.tipos.length > 0 && (
        <Space>
          <Alert message="Cliente con precios especiales" type="success" />
        </Space>
      )}
    </>
  );
};

export default ItemForm;
