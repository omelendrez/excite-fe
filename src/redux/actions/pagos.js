import * as types from "redux/types";

export const getPagos = () => {
  return {
    type: types.GET_PAGOS_REQUEST,
  };
};

// Pago
export const getPago = (id) => {
  return {
    type: types.GET_PAGO_REQUEST,
    id,
  };
};

export const addPago = (newData) => {
  return {
    type: types.ADD_PAGO_REQUEST,
    newData,
  };
};

export const deletePago = (id) => {
  return {
    type: types.DELETE_PAGO_REQUEST,
    id,
  };
};

// Pago Remito
export const getPagoRemito = (id) => {
  return {
    type: types.GET_PAGO_REMITO_REQUEST,
    id,
  };
};

export const addPagoRemito = (newData) => {
  return {
    type: types.ADD_PAGO_REMITO_REQUEST,
    newData,
  };
};

export const updatePagoRemito = (newData) => {
  return {
    type: types.UPDATE_PAGO_REMITO_REQUEST,
    newData,
  };
};

export const deletePagoRemito = (record) => {
  return {
    type: types.DELETE_PAGO_REMITO_REQUEST,
    record,
  };
};

export const cleanPagoRemito = (data) => {
  return {
    type: types.CLEAN_PAGO_REMITO,
    data,
  };
};

// Pago Valor
export const getPagoValor = (id) => {
  return {
    type: types.GET_PAGO_VALOR_REQUEST,
    id,
  };
};

export const addPagoValor = (newData) => {
  return {
    type: types.ADD_PAGO_VALOR_REQUEST,
    newData,
  };
};

export const updatePagoValor = (newData) => {
  return {
    type: types.UPDATE_PAGO_VALOR_REQUEST,
    newData,
  };
};

export const deletePagoValor = (record) => {
  return {
    type: types.DELETE_PAGO_VALOR_REQUEST,
    record,
  };
};

export const cleanPagoValor = (data) => {
  return {
    type: types.CLEAN_PAGO_VALOR,
    data,
  };
};
