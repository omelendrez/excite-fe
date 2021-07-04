export const GET_NUMEROS_REQUEST = "GET_NUMEROS_REQUEST";
export const GET_NUMEROS_SUCCESS = "GET_NUMEROS_SUCCESS";
export const GET_NUMEROS_FAILED = "GET_NUMEROS_FAILED";

export const GET_NUMERO_REQUEST = "GET_NUMERO_REQUEST";
export const GET_NUMERO_SUCCESS = "GET_NUMERO_SUCCESS";
export const GET_NUMERO_FAILED = "GET_NUMERO_FAILED";

export const ADD_NUMERO_REQUEST = "ADD_NUMERO_REQUEST";
export const ADD_NUMERO_SUCCESS = "ADD_NUMERO_SUCCESS";
export const ADD_NUMERO_FAILED = "ADD_NUMERO_FAILED";

export const UPDATE_NUMERO_REQUEST = "UPDATE_NUMERO_REQUEST";
export const UPDATE_NUMERO_SUCCESS = "UPDATE_NUMERO_SUCCESS";
export const UPDATE_NUMERO_FAILED = "UPDATE_NUMERO_FAILED";

export const DELETE_NUMERO_REQUEST = "DELETE_NUMERO_REQUEST";
export const DELETE_NUMERO_SUCCESS = "DELETE_NUMERO_SUCCESS";
export const DELETE_NUMERO_FAILED = "DELETE_NUMERO_FAILED";

export const getNumeros = () => {
  return {
    type: GET_NUMEROS_REQUEST,
  };
};

export const getNumero = (id) => {
  return {
    type: GET_NUMERO_REQUEST,
    id,
  };
};

export const addNumero = (newData) => {
  return {
    type: ADD_NUMERO_REQUEST,
    newData,
  };
};

export const updateNumero = (id, newData) => {
  return {
    type: UPDATE_NUMERO_REQUEST,
    id,
    newData,
  };
};

export const deleteNumero = (id) => {
  return {
    type: DELETE_NUMERO_REQUEST,
    id,
  };
};
