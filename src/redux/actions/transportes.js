import * as types from "redux/types";

export const getTransportes = () => {
  return {
    type: types.GET_TRANSPORTES_REQUEST,
  };
};

export const getTransporte = (id) => {
  return {
    type: types.GET_TRANSPORTE_REQUEST,
    id,
  };
};

export const addTransporte = (newData) => {
  return {
    type: types.ADD_TRANSPORTE_REQUEST,
    newData,
  };
};

export const updateTransporte = (id, newData) => {
  return {
    type: types.UPDATE_TRANSPORTE_REQUEST,
    id,
    newData,
  };
};

export const deleteTransporte = (id) => {
  return {
    type: types.DELETE_TRANSPORTE_REQUEST,
    id,
  };
};
