export const GET_PAGOS_REQUEST = "GET_PAGOS_REQUEST";
export const GET_PAGOS_SUCCESS = "GET_PAGOS_SUCCESS";
export const GET_PAGOS_FAILED = "GET_PAGOS_FAILED";

export const GET_PAGO_REQUEST = "GET_PAGO_REQUEST";
export const GET_PAGO_SUCCESS = "GET_PAGO_SUCCESS";
export const GET_PAGO_FAILED = "GET_PAGO_FAILED";

export const ADD_PAGO_REQUEST = "ADD_PAGO_REQUEST";
export const ADD_PAGO_SUCCESS = "ADD_PAGO_SUCCESS";
export const ADD_PAGO_FAILED = "ADD_PAGO_FAILED";

export const UPDATE_PAGO_REQUEST = "UPDATE_PAGO_REQUEST";
export const UPDATE_PAGO_SUCCESS = "UPDATE_PAGO_SUCCESS";
export const UPDATE_PAGO_FAILED = "UPDATE_PAGO_FAILED";

export const DELETE_PAGO_REQUEST = "DELETE_PAGO_REQUEST";
export const DELETE_PAGO_SUCCESS = "DELETE_PAGO_SUCCESS";
export const DELETE_PAGO_FAILED = "DELETE_PAGO_FAILED";

export const GET_PAGO_REMITO_REQUEST = "GET_PAGO_REMITO_REQUEST";
export const GET_PAGO_REMITO_SUCCESS = "GET_PAGO_REMITO_SUCCESS";
export const GET_PAGO_REMITO_FAILED = "GET_PAGO_REMITO_FAILED";

export const ADD_PAGO_REMITO_REQUEST = "ADD_PAGO_REMITO_REQUEST";
export const ADD_PAGO_REMITO_SUCCESS = "ADD_PAGO_REMITO_SUCCESS";
export const ADD_PAGO_REMITO_FAILED = "ADD_PAGO_REMITO_FAILED";

export const UPDATE_PAGO_REMITO_REQUEST = "UPDATE_PAGO_REMITO_REQUEST";
export const UPDATE_PAGO_REMITO_SUCCESS = "UPDATE_PAGO_REMITO_SUCCESS";
export const UPDATE_PAGO_REMITO_FAILED = "UPDATE_PAGO_REMITO_FAILED";

export const DELETE_PAGO_REMITO_REQUEST = "DELETE_PAGO_REMITO_REQUEST";
export const DELETE_PAGO_REMITO_SUCCESS = "DELETE_PAGO_REMITO_SUCCESS";
export const DELETE_PAGO_REMITO_FAILED = "DELETE_PAGO_REMITO_FAILED";

export const CLEAN_PAGO_REMITO = "CLEAN_PAGO_REMITO";

export const GET_PAGO_VALOR_REQUEST = "GET_PAGO_VALOR_REQUEST";
export const GET_PAGO_VALOR_SUCCESS = "GET_PAGO_VALOR_SUCCESS";
export const GET_PAGO_VALOR_FAILED = "GET_PAGO_VALOR_FAILED";

export const ADD_PAGO_VALOR_REQUEST = "ADD_PAGO_VALOR_REQUEST";
export const ADD_PAGO_VALOR_SUCCESS = "ADD_PAGO_VALOR_SUCCESS";
export const ADD_PAGO_VALOR_FAILED = "ADD_PAGO_VALOR_FAILED";

export const UPDATE_PAGO_VALOR_REQUEST = "UPDATE_PAGO_VALOR_REQUEST";
export const UPDATE_PAGO_VALOR_SUCCESS = "UPDATE_PAGO_VALOR_SUCCESS";
export const UPDATE_PAGO_VALOR_FAILED = "UPDATE_PAGO_VALOR_FAILED";

export const DELETE_PAGO_VALOR_REQUEST = "DELETE_PAGO_VALOR_REQUEST";
export const DELETE_PAGO_VALOR_SUCCESS = "DELETE_PAGO_VALOR_SUCCESS";
export const DELETE_PAGO_VALOR_FAILED = "DELETE_PAGO_VALOR_FAILED";

export const CLEAN_PAGO_VALOR = "CLEAN_PAGO_VALOR";

export const PAGOS_RESET = "PAGOS_RESET";

export const getPagos = () => {
  return {
    type: GET_PAGOS_REQUEST,
  };
};

// Pago
export const getPago = (id) => {
  return {
    type: GET_PAGO_REQUEST,
    id,
  };
};

export const addPago = (newData) => {
  return {
    type: ADD_PAGO_REQUEST,
    newData,
  };
};

export const deletePago = (id) => {
  return {
    type: DELETE_PAGO_REQUEST,
    id,
  };
};

// Pago Remito
export const getPagoRemito = (id) => {
  return {
    type: GET_PAGO_REMITO_REQUEST,
    id,
  };
};

export const addPagoRemito = (newData) => {
  return {
    type: ADD_PAGO_REMITO_REQUEST,
    newData,
  };
};

export const updatePagoRemito = (newData) => {
  return {
    type: UPDATE_PAGO_REMITO_REQUEST,
    newData,
  };
};

export const deletePagoRemito = (record) => {
  return {
    type: DELETE_PAGO_REMITO_REQUEST,
    record,
  };
};

export const cleanPagoRemito = (data) => {
  return {
    type: CLEAN_PAGO_REMITO,
    data,
  };
};

// Pago Valor
export const getPagoValor = (id) => {
  return {
    type: GET_PAGO_VALOR_REQUEST,
    id,
  };
};

export const addPagoValor = (newData) => {
  return {
    type: ADD_PAGO_VALOR_REQUEST,
    newData,
  };
};

export const updatePagoValor = (newData) => {
  return {
    type: UPDATE_PAGO_VALOR_REQUEST,
    newData,
  };
};

export const deletePagoValor = (record) => {
  return {
    type: DELETE_PAGO_VALOR_REQUEST,
    record,
  };
};

export const cleanPagoValor = (data) => {
  return {
    type: CLEAN_PAGO_VALOR,
    data,
  };
};
