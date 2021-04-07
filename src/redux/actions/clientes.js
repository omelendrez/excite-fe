import * as types from "../types";

export const getClientes = () => {
  return {
    type: types.GET_CLIENTES_REQUEST,
  };
};

export const getCliente = (id) => {
  return {
    type: types.GET_CLIENTE_REQUEST,
    id,
  };
};

