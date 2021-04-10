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

export const addCliente = (newData) => {
  return {
    type: types.ADD_CLIENTE_REQUEST,
    newData,
  };
};

export const updateCliente = (id, newData) => {
  return {
    type: types.UPDATE_CLIENTE_REQUEST,
    id,
    newData,
  };
};

export const deleteCliente = (id) => {
  return {
    type: types.DELETE_CLIENTE_REQUEST,
    id,
  };
};
