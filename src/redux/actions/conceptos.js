export const GET_CONCEPTOS_REQUEST = "GET_CONCEPTOS_REQUEST";
export const GET_CONCEPTOS_SUCCESS = "GET_CONCEPTOS_SUCCESS";
export const GET_CONCEPTOS_FAILED = "GET_CONCEPTOS_FAILED";

export const GET_CONCEPTO_REQUEST = "GET_CONCEPTO_REQUEST";
export const GET_CONCEPTO_SUCCESS = "GET_CONCEPTO_SUCCESS";
export const GET_CONCEPTO_FAILED = "GET_CONCEPTO_FAILED";

export const ADD_CONCEPTO_REQUEST = "ADD_CONCEPTO_REQUEST";
export const ADD_CONCEPTO_SUCCESS = "ADD_CONCEPTO_SUCCESS";
export const ADD_CONCEPTO_FAILED = "ADD_CONCEPTO_FAILED";

export const UPDATE_CONCEPTO_REQUEST = "UPDATE_CONCEPTO_REQUEST";
export const UPDATE_CONCEPTO_SUCCESS = "UPDATE_CONCEPTO_SUCCESS";
export const UPDATE_CONCEPTO_FAILED = "UPDATE_CONCEPTO_FAILED";

export const DELETE_CONCEPTO_REQUEST = "DELETE_CONCEPTO_REQUEST";
export const DELETE_CONCEPTO_SUCCESS = "DELETE_CONCEPTO_SUCCESS";
export const DELETE_CONCEPTO_FAILED = "DELETE_CONCEPTO_FAILED";

export const getConceptos = () => {
  return {
    type: GET_CONCEPTOS_REQUEST,
  };
};

export const getConcepto = (id) => {
  return {
    type: GET_CONCEPTO_REQUEST,
    id,
  };
};

export const addConcepto = (newData) => {
  return {
    type: ADD_CONCEPTO_REQUEST,
    newData,
  };
};

export const updateConcepto = (id, newData) => {
  return {
    type: UPDATE_CONCEPTO_REQUEST,
    id,
    newData,
  };
};

export const deleteConcepto = (id) => {
  return {
    type: DELETE_CONCEPTO_REQUEST,
    id,
  };
};
