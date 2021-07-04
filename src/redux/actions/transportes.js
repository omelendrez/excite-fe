export const GET_TRANSPORTES_REQUEST = "GET_TRANSPORTES_REQUEST";
export const GET_TRANSPORTES_SUCCESS = "GET_TRANSPORTES_SUCCESS";
export const GET_TRANSPORTES_FAILED = "GET_TRANSPORTES_FAILED";

export const GET_TRANSPORTE_REQUEST = "GET_TRANSPORTE_REQUEST";
export const GET_TRANSPORTE_SUCCESS = "GET_TRANSPORTE_SUCCESS";
export const GET_TRANSPORTE_FAILED = "GET_TRANSPORTE_FAILED";

export const ADD_TRANSPORTE_REQUEST = "ADD_TRANSPORTE_REQUEST";
export const ADD_TRANSPORTE_SUCCESS = "ADD_TRANSPORTE_SUCCESS";
export const ADD_TRANSPORTE_FAILED = "ADD_TRANSPORTE_FAILED";

export const UPDATE_TRANSPORTE_REQUEST = "UPDATE_TRANSPORTE_REQUEST";
export const UPDATE_TRANSPORTE_SUCCESS = "UPDATE_TRANSPORTE_SUCCESS";
export const UPDATE_TRANSPORTE_FAILED = "UPDATE_TRANSPORTE_FAILED";

export const DELETE_TRANSPORTE_REQUEST = "DELETE_TRANSPORTE_REQUEST";
export const DELETE_TRANSPORTE_SUCCESS = "DELETE_TRANSPORTE_SUCCESS";
export const DELETE_TRANSPORTE_FAILED = "DELETE_TRANSPORTE_FAILED";

export const getTransportes = () => {
  return {
    type: GET_TRANSPORTES_REQUEST,
  };
};

export const getTransporte = (id) => {
  return {
    type: GET_TRANSPORTE_REQUEST,
    id,
  };
};

export const addTransporte = (newData) => {
  return {
    type: ADD_TRANSPORTE_REQUEST,
    newData,
  };
};

export const updateTransporte = (id, newData) => {
  return {
    type: UPDATE_TRANSPORTE_REQUEST,
    id,
    newData,
  };
};

export const deleteTransporte = (id) => {
  return {
    type: DELETE_TRANSPORTE_REQUEST,
    id,
  };
};
