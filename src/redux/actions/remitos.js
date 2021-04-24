import * as types from "../types";

export const getRemitos = () => {
  return {
    type: types.GET_REMITOS_REQUEST,
  };
};

export const getItems = (id) => {
  return {
    type: types.GET_ITEMS_REQUEST,
    id,
  };
};

export const getRemito = (id) => {
  return {
    type: types.GET_REMITO_REQUEST,
    id,
  };
};

export const deleteRemito = (id) => {
  return {
    type: types.DELETE_REMITO_REQUEST,
    id,
  };
};
