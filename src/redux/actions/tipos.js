export const GET_TIPOS_REQUEST = "GET_TIPOS_REQUEST";
export const GET_TIPOS_SUCCESS = "GET_TIPOS_SUCCESS";
export const GET_TIPOS_FAILED = "GET_TIPOS_FAILED";

export const GET_TIPOS_SUBTIPOS_REQUEST = "GET_TIPOS_SUBTIPOS_REQUEST";
export const GET_TIPOS_SUBTIPOS_SUCCESS = "GET_TIPOS_SUBTIPOS_SUCCESS";
export const GET_TIPOS_SUBTIPOS_FAILED = "GET_TIPOS_SUBTIPOS_FAILED";

export const GET_TIPO_REQUEST = "GET_TIPO_REQUEST";
export const GET_TIPO_SUCCESS = "GET_TIPO_SUCCESS";
export const GET_TIPO_FAILED = "GET_TIPO_FAILED";

export const ADD_TIPO_REQUEST = "ADD_TIPO_REQUEST";
export const ADD_TIPO_SUCCESS = "ADD_TIPO_SUCCESS";
export const ADD_TIPO_FAILED = "ADD_TIPO_FAILED";

export const UPDATE_TIPO_REQUEST = "UPDATE_TIPO_REQUEST";
export const UPDATE_TIPO_SUCCESS = "UPDATE_TIPO_SUCCESS";
export const UPDATE_TIPO_FAILED = "UPDATE_TIPO_FAILED";

export const DELETE_TIPO_REQUEST = "DELETE_TIPO_REQUEST";
export const DELETE_TIPO_SUCCESS = "DELETE_TIPO_SUCCESS";
export const DELETE_TIPO_FAILED = "DELETE_TIPO_FAILED";

export const CHANGE_PRICE_REQUEST = "CHANGE_PRICE_REQUEST";
export const CHANGE_PRICE_SUCCESS = "CHANGE_PRICE_SUCCESS";
export const CHANGE_PRICE_FAILED = "CHANGE_PRICE_FAILED";

export const TIPOS_RESET = "TIPOS_RESET";

export const getTipos = () => {
  return {
    type: GET_TIPOS_REQUEST,
  };
};

export const getTiposSubtipos = (id) => {
  return {
    type: GET_TIPOS_SUBTIPOS_REQUEST,
    id,
  };
};

export const getTipo = (id) => {
  return {
    type: GET_TIPO_REQUEST,
    id,
  };
};

export const addTipo = (newData) => {
  return {
    type: ADD_TIPO_REQUEST,
    newData,
  };
};

export const updateTipo = (id, newData) => {
  return {
    type: UPDATE_TIPO_REQUEST,
    id,
    newData,
  };
};

export const deleteTipo = (id) => {
  return {
    type: DELETE_TIPO_REQUEST,
    id,
  };
};

export const changePrice = (id, newData) => {
  return {
    type: CHANGE_PRICE_REQUEST,
    id,
    newData,
  };
};
