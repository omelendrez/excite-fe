import * as types from "redux/types";

export const getTipos = () => {
  return {
    type: types.GET_TIPOS_REQUEST,
  };
};

export const getTiposSubtipos = (id) => {
  return {
    type: types.GET_TIPOS_SUBTIPOS_REQUEST,
    id,
  };
};

export const getTipo = (id) => {
  return {
    type: types.GET_TIPO_REQUEST,
    id,
  };
};

export const addTipo = (newData) => {
  return {
    type: types.ADD_TIPO_REQUEST,
    newData,
  };
};

export const updateTipo = (id, newData) => {
  return {
    type: types.UPDATE_TIPO_REQUEST,
    id,
    newData,
  };
};

export const deleteTipo = (id) => {
  return {
    type: types.DELETE_TIPO_REQUEST,
    id,
  };
};
