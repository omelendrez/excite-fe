export const GET_AJUSTES_REQUEST = "GET_AJUSTES_REQUEST";
export const GET_AJUSTES_SUCCESS = "GET_AJUSTES_SUCCESS";
export const GET_AJUSTES_FAILED = "GET_AJUSTES_FAILED";

export const GET_AJUSTE_REQUEST = "GET_AJUSTE_REQUEST";
export const GET_AJUSTE_SUCCESS = "GET_AJUSTE_SUCCESS";
export const GET_AJUSTE_FAILED = "GET_AJUSTE_FAILED";

export const ADD_AJUSTE_REQUEST = "ADD_AJUSTE_REQUEST";
export const ADD_AJUSTE_SUCCESS = "ADD_AJUSTE_SUCCESS";
export const ADD_AJUSTE_FAILED = "ADD_AJUSTE_FAILED";

export const UPDATE_AJUSTE_REQUEST = "UPDATE_AJUSTE_REQUEST";
export const UPDATE_AJUSTE_SUCCESS = "UPDATE_AJUSTE_SUCCESS";
export const UPDATE_AJUSTE_FAILED = "UPDATE_AJUSTE_FAILED";

export const DELETE_AJUSTE_REQUEST = "DELETE_AJUSTE_REQUEST";
export const DELETE_AJUSTE_SUCCESS = "DELETE_AJUSTE_SUCCESS";
export const DELETE_AJUSTE_FAILED = "DELETE_AJUSTE_FAILED";

export const RESET_AJUSTES = "RESET_AJUSTES";

export const getAjustes = () => {
  return {
    type: GET_AJUSTES_REQUEST,
  };
};

export const getAjuste = (id) => {
  return {
    type: GET_AJUSTE_REQUEST,
    id,
  };
};

export const addAjuste = (newData) => {
  return {
    type: ADD_AJUSTE_REQUEST,
    newData,
  };
};

export const updateAjuste = (id, newData) => {
  return {
    type: UPDATE_AJUSTE_REQUEST,
    id,
    newData,
  };
};

export const deleteAjuste = (id) => {
  return {
    type: DELETE_AJUSTE_REQUEST,
    id,
  };
};
