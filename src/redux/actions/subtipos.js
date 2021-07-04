export const GET_SUBTIPOS_REQUEST = "GET_SUBTIPOS_REQUEST";
export const GET_SUBTIPOS_SUCCESS = "GET_SUBTIPOS_SUCCESS";
export const GET_SUBTIPOS_FAILED = "GET_SUBTIPOS_FAILED";

export const GET_SUBTIPO_REQUEST = "GET_SUBTIPO_REQUEST";
export const GET_SUBTIPO_SUCCESS = "GET_SUBTIPO_SUCCESS";
export const GET_SUBTIPO_FAILED = "GET_SUBTIPO_FAILED";

export const ADD_SUBTIPO_REQUEST = "ADD_SUBTIPO_REQUEST";
export const ADD_SUBTIPO_SUCCESS = "ADD_SUBTIPO_SUCCESS";
export const ADD_SUBTIPO_FAILED = "ADD_SUBTIPO_FAILED";

export const UPDATE_SUBTIPO_REQUEST = "UPDATE_SUBTIPO_REQUEST";
export const UPDATE_SUBTIPO_SUCCESS = "UPDATE_SUBTIPO_SUCCESS";
export const UPDATE_SUBTIPO_FAILED = "UPDATE_SUBTIPO_FAILED";

export const DELETE_SUBTIPO_REQUEST = "DELETE_SUBTIPO_REQUEST";
export const DELETE_SUBTIPO_SUCCESS = "DELETE_SUBTIPO_SUCCESS";
export const DELETE_SUBTIPO_FAILED = "DELETE_SUBTIPO_FAILED";

export const getSubtipos = () => {
  return {
    type: GET_SUBTIPOS_REQUEST,
  };
};

export const getSubtipo = (id) => {
  return {
    type: GET_SUBTIPO_REQUEST,
    id,
  };
};

export const addSubtipo = (newData) => {
  return {
    type: ADD_SUBTIPO_REQUEST,
    newData,
  };
};

export const updateSubtipo = (id, newData) => {
  return {
    type: UPDATE_SUBTIPO_REQUEST,
    id,
    newData,
  };
};

export const deleteSubtipo = (id) => {
  return {
    type: DELETE_SUBTIPO_REQUEST,
    id,
  };
};
