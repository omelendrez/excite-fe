export const GET_PRODUCTOS_REQUEST = "GET_PRODUCTOS_REQUEST";
export const GET_PRODUCTOS_SUCCESS = "GET_PRODUCTOS_SUCCESS";
export const GET_PRODUCTOS_FAILED = "GET_PRODUCTOS_FAILED";

export const GET_PRODUCTO_REQUEST = "GET_PRODUCTO_REQUEST";
export const GET_PRODUCTO_SUCCESS = "GET_PRODUCTO_SUCCESS";
export const GET_PRODUCTO_FAILED = "GET_PRODUCTO_FAILED";

export const ADD_PRODUCTO_REQUEST = "ADD_PRODUCTO_REQUEST";
export const ADD_PRODUCTO_SUCCESS = "ADD_PRODUCTO_SUCCESS";
export const ADD_PRODUCTO_FAILED = "ADD_PRODUCTO_FAILED";

export const UPDATE_PRODUCTO_REQUEST = "UPDATE_PRODUCTO_REQUEST";
export const UPDATE_PRODUCTO_SUCCESS = "UPDATE_PRODUCTO_SUCCESS";
export const UPDATE_PRODUCTO_FAILED = "UPDATE_PRODUCTO_FAILED";

export const DELETE_PRODUCTO_REQUEST = "DELETE_PRODUCTO_REQUEST";
export const DELETE_PRODUCTO_SUCCESS = "DELETE_PRODUCTO_SUCCESS";
export const DELETE_PRODUCTO_FAILED = "DELETE_PRODUCTO_FAILED";

export const getProductos = () => {
  return {
    type: GET_PRODUCTOS_REQUEST,
  };
};

export const getProducto = (id) => {
  return {
    type: GET_PRODUCTO_REQUEST,
    id,
  };
};

export const addProducto = (newData) => {
  return {
    type: ADD_PRODUCTO_REQUEST,
    newData,
  };
};

export const updateProducto = (id, newData) => {
  return {
    type: UPDATE_PRODUCTO_REQUEST,
    id,
    newData,
  };
};

export const deleteProducto = (id) => {
  return {
    type: DELETE_PRODUCTO_REQUEST,
    id,
  };
};
