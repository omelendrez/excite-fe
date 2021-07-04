export const GET_REMITOS_REQUEST = "GET_REMITOS_REQUEST";
export const GET_REMITOS_SUCCESS = "GET_REMITOS_SUCCESS";
export const GET_REMITOS_FAILED = "GET_REMITOS_FAILED";

export const ADD_REMITO_REQUEST = "ADD_REMITO_REQUEST";
export const ADD_REMITO_SUCCESS = "ADD_REMITO_SUCCESS";
export const ADD_REMITO_FAILED = "ADD_REMITO_FAILED";

export const UPDATE_REMITO_REQUEST = "UPDATE_REMITO_REQUEST";
export const UPDATE_REMITO_SUCCESS = "UPDATE_REMITO_SUCCESS";
export const UPDATE_REMITO_FAILED = "UPDATE_REMITO_FAILED";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILED = "GET_ITEM_FAILED";

export const CLEAN_ITEM = "CLEAN_ITEM";

export const GET_REMITO_REQUEST = "GET_REMITO_REQUEST";
export const GET_REMITO_SUCCESS = "GET_REMITO_SUCCESS";
export const GET_REMITO_FAILED = "GET_REMITO_FAILED";

export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILED = "ADD_ITEM_FAILED";

export const UPDATE_ITEM_REQUEST = "UPDATE_ITEM_REQUEST";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_FAILED = "UPDATE_ITEM_FAILED";

export const DELETE_ITEM_REQUEST = "DELETE_ITEM_REQUEST";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILED = "DELETE_ITEM_FAILED";

export const DELETE_REMITO_REQUEST = "DELETE_REMITO_REQUEST";
export const DELETE_REMITO_SUCCESS = "DELETE_REMITO_SUCCESS";
export const DELETE_REMITO_FAILED = "DELETE_REMITO_FAILED";

export const REMITOS_RESET = "REMITOS_RESET";

export const getRemitos = () => {
  return {
    type: GET_REMITOS_REQUEST,
  };
};

export const addRemito = (newData) => {
  return {
    type: ADD_REMITO_REQUEST,
    newData,
  };
};

export const updateRemito = (newData) => {
  return {
    type: UPDATE_REMITO_REQUEST,
    newData,
  };
};

export const getItems = (id) => {
  return {
    type: GET_ITEMS_REQUEST,
    id,
  };
};

export const getRemito = (id) => {
  return {
    type: GET_REMITO_REQUEST,
    id,
  };
};

export const getItem = (id) => {
  return {
    type: GET_ITEM_REQUEST,
    id,
  };
};

export const cleanItem = (data) => {
  return {
    type: CLEAN_ITEM,
    data,
  };
};

export const deleteRemito = (id) => {
  return {
    type: DELETE_REMITO_REQUEST,
    id,
  };
};

export const addItem = (newData) => {
  return {
    type: ADD_ITEM_REQUEST,
    newData,
  };
};

export const updateItem = (newData) => {
  return {
    type: UPDATE_ITEM_REQUEST,
    newData,
  };
};

export const deleteItem = (record) => {
  return {
    type: DELETE_ITEM_REQUEST,
    record,
  };
};
