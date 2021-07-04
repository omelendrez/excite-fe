export const GET_IVAS_REQUEST = "GET_IVAS_REQUEST";
export const GET_IVAS_SUCCESS = "GET_IVAS_SUCCESS";
export const GET_IVAS_FAILED = "GET_IVAS_FAILED";

export const GET_IVA_REQUEST = "GET_IVA_REQUEST";
export const GET_IVA_SUCCESS = "GET_IVA_SUCCESS";
export const GET_IVA_FAILED = "GET_IVA_FAILED";

export const ADD_IVA_REQUEST = "ADD_IVA_REQUEST";
export const ADD_IVA_SUCCESS = "ADD_IVA_SUCCESS";
export const ADD_IVA_FAILED = "ADD_IVA_FAILED";

export const UPDATE_IVA_REQUEST = "UPDATE_IVA_REQUEST";
export const UPDATE_IVA_SUCCESS = "UPDATE_IVA_SUCCESS";
export const UPDATE_IVA_FAILED = "UPDATE_IVA_FAILED";

export const DELETE_IVA_REQUEST = "DELETE_IVA_REQUEST";
export const DELETE_IVA_SUCCESS = "DELETE_IVA_SUCCESS";
export const DELETE_IVA_FAILED = "DELETE_IVA_FAILED";

export const getIvas = () => {
  return {
    type: GET_IVAS_REQUEST,
  };
};

export const getIva = (id) => {
  return {
    type: GET_IVA_REQUEST,
    id,
  };
};
export const addIva = (newData) => {
  return {
    type: ADD_IVA_REQUEST,
    newData,
  };
};

export const updateIva = (id, newData) => {
  return {
    type: UPDATE_IVA_REQUEST,
    id,
    newData,
  };
};

export const deleteIva = (id) => {
  return {
    type: DELETE_IVA_REQUEST,
    id,
  };
};
