import * as types from "redux/types";

export const getConceptos = () => {
  return {
    type: types.GET_CONCEPTOS_REQUEST,
  };
};

export const getConcepto = (id) => {
  return {
    type: types.GET_CONCEPTO_REQUEST,
    id,
  };
};

export const addConcepto = (newData) => {
  return {
    type: types.ADD_CONCEPTO_REQUEST,
    newData,
  };
};

export const updateConcepto = (id, newData) => {
  return {
    type: types.UPDATE_CONCEPTO_REQUEST,
    id,
    newData,
  };
};

export const deleteConcepto = (id) => {
  return {
    type: types.DELETE_CONCEPTO_REQUEST,
    id,
  };
};
