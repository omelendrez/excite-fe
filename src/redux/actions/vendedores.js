import * as types from "redux/types";

export const getVendedores = () => {
  return {
    type: types.GET_VENDEDORES_REQUEST,
  };
};

export const getVendedoresProductos = (id) => {
  return {
    type: types.GET_VENDEDORES_PRODUCTOS_REQUEST,
    id,
  };
};

export const getVendedor = (id) => {
  return {
    type: types.GET_VENDEDOR_REQUEST,
    id,
  };
};

export const addVendedor = (newData) => {
  return {
    type: types.ADD_VENDEDOR_REQUEST,
    newData,
  };
};

export const updateVendedor = (id, newData) => {
  return {
    type: types.UPDATE_VENDEDOR_REQUEST,
    id,
    newData,
  };
};

export const deleteVendedor = (id) => {
  return {
    type: types.DELETE_VENDEDOR_REQUEST,
    id,
  };
};
