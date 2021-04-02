import * as types from "../types";

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
