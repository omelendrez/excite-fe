import * as types from "../types";

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
