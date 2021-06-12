import * as types from "redux/types";

export const getPagos = () => {
  return {
    type: types.GET_PAGOS_REQUEST,
  };
};

export const getPago = (id) => {
  return {
    type: types.GET_PAGO_REQUEST,
    id,
  };
};
