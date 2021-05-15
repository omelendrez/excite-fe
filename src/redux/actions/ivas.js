import * as types from "redux/types";

export const getIvas = () => {
  return {
    type: types.GET_IVAS_REQUEST,
  };
};

export const getIva = (id) => {
  return {
    type: types.GET_IVA_REQUEST,
    id,
  };
};
export const addIva = (newData) => {
  return {
    type: types.ADD_IVA_REQUEST,
    newData,
  };
};

export const updateIva = (id, newData) => {
  return {
    type: types.UPDATE_IVA_REQUEST,
    id,
    newData,
  };
};

export const deleteIva = (id) => {
  return {
    type: types.DELETE_IVA_REQUEST,
    id,
  };
};
