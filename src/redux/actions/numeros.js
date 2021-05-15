import * as types from "redux/types";

export const getNumeros = () => {
  return {
    type: types.GET_NUMEROS_REQUEST,
  };
};

export const getNumero = (id) => {
  return {
    type: types.GET_NUMERO_REQUEST,
    id,
  };
};

export const addNumero = (newData) => {
  return {
    type: types.ADD_NUMERO_REQUEST,
    newData,
  };
};

export const updateNumero = (id, newData) => {
  return {
    type: types.UPDATE_NUMERO_REQUEST,
    id,
    newData,
  };
};

export const deleteNumero = (id) => {
  return {
    type: types.DELETE_NUMERO_REQUEST,
    id,
  };
};
