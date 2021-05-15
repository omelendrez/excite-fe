import * as types from "redux/types";

export const getProductos = () => {
  return {
    type: types.GET_PRODUCTOS_REQUEST,
  };
};

export const getProducto = (id) => {
  return {
    type: types.GET_PRODUCTO_REQUEST,
    id,
  };
};

export const addProducto = (newData) => {
  return {
    type: types.ADD_PRODUCTO_REQUEST,
    newData,
  };
};

export const updateProducto = (id, newData) => {
  return {
    type: types.UPDATE_PRODUCTO_REQUEST,
    id,
    newData,
  };
};

export const deleteProducto = (id) => {
  return {
    type: types.DELETE_PRODUCTO_REQUEST,
    id,
  };
};
