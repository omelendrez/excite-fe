import * as types from "redux/types";

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

export const getItem = (id) => {
  return {
    type: types.GET_ITEM_REQUEST,
    id,
  };
};

export const cleanItem = (data) => {
  return {
    type: types.CLEAN_ITEM,
    data,
  };
};

export const deleteRemito = (id) => {
  return {
    type: types.DELETE_REMITO_REQUEST,
    id,
  };
};

export const addItem = (newData) => {
  return {
    type: types.ADD_ITEM_REQUEST,
    newData,
  };
};

export const updateItem = (newData) => {
  return {
    type: types.UPDATE_ITEM_REQUEST,
    newData,
  };
};

export const deleteItem = (record) => {
  return {
    type: types.DELETE_ITEM_REQUEST,
    record,
  };
};
