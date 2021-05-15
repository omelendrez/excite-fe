import * as types from "redux/types";

export const getSubtipos = () => {
  return {
    type: types.GET_SUBTIPOS_REQUEST,
  };
};

export const getSubtipo = (id) => {
  return {
    type: types.GET_SUBTIPO_REQUEST,
    id,
  };
};

export const addSubtipo = (newData) => {
  return {
    type: types.ADD_SUBTIPO_REQUEST,
    newData,
  };
};

export const updateSubtipo = (id, newData) => {
  return {
    type: types.UPDATE_SUBTIPO_REQUEST,
    id,
    newData,
  };
};

export const deleteSubtipo = (id) => {
  return {
    type: types.DELETE_SUBTIPO_REQUEST,
    id,
  };
};
