import * as types from "../types";

export const getVendedores = () => {
  return {
    type: types.GET_VENDEDORES_REQUEST,
  };
};

export const getVendedor = (id) => {
  return {
    type: types.GET_VENDEDOR_REQUEST,
    id,
  };
};
