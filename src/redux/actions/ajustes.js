import * as types from "redux/types";

export const getAjustes = () => {
  return {
    type: types.GET_AJUSTES_REQUEST,
  };
};

export const getAjuste = (id) => {
  return {
    type: types.GET_AJUSTE_REQUEST,
    id,
  };
};

export const addAjuste = (newData) => {
  return {
    type: types.ADD_AJUSTE_REQUEST,
    newData,
  };
};

export const updateAjuste = (id, newData) => {
  return {
    type: types.UPDATE_AJUSTE_REQUEST,
    id,
    newData,
  };
};

export const deleteAjuste = (id) => {
  return {
    type: types.DELETE_AJUSTE_REQUEST,
    id,
  };
};
