export const GET_VENDEDORES_REQUEST = "GET_VENDEDORES_REQUEST";
export const GET_VENDEDORES_SUCCESS = "GET_VENDEDORES_SUCCESS";
export const GET_VENDEDORES_FAILED = "GET_VENDEDORES_FAILED";

export const GET_VENDEDORES_PRODUCTOS_REQUEST =
  "GET_VENDEDORES_PRODUCTOS_REQUEST";
export const GET_VENDEDORES_PRODUCTOS_SUCCESS =
  "GET_VENDEDORES_PRODUCTOS_SUCCESS";
export const GET_VENDEDORES_PRODUCTOS_FAILED =
  "GET_VENDEDORES_PRODUCTOS_FAILED";

export const GET_VENDEDOR_REQUEST = "GET_VENDEDOR_REQUEST";
export const GET_VENDEDOR_SUCCESS = "GET_VENDEDOR_SUCCESS";
export const GET_VENDEDOR_FAILED = "GET_VENDEDOR_FAILED";

export const ADD_VENDEDOR_REQUEST = "ADD_VENDEDOR_REQUEST";
export const ADD_VENDEDOR_SUCCESS = "ADD_VENDEDOR_SUCCESS";
export const ADD_VENDEDOR_FAILED = "ADD_VENDEDOR_FAILED";

export const UPDATE_VENDEDOR_REQUEST = "UPDATE_VENDEDOR_REQUEST";
export const UPDATE_VENDEDOR_SUCCESS = "UPDATE_VENDEDOR_SUCCESS";
export const UPDATE_VENDEDOR_FAILED = "UPDATE_VENDEDOR_FAILED";

export const DELETE_VENDEDOR_REQUEST = "DELETE_VENDEDOR_REQUEST";
export const DELETE_VENDEDOR_SUCCESS = "DELETE_VENDEDOR_SUCCESS";
export const DELETE_VENDEDOR_FAILED = "DELETE_VENDEDOR_FAILED";

export const getVendedores = () => {
  return {
    type: GET_VENDEDORES_REQUEST,
  };
};

export const getVendedoresProductos = (id) => {
  return {
    type: GET_VENDEDORES_PRODUCTOS_REQUEST,
    id,
  };
};

export const getVendedor = (id) => {
  return {
    type: GET_VENDEDOR_REQUEST,
    id,
  };
};

export const addVendedor = (newData) => {
  return {
    type: ADD_VENDEDOR_REQUEST,
    newData,
  };
};

export const updateVendedor = (id, newData) => {
  return {
    type: UPDATE_VENDEDOR_REQUEST,
    id,
    newData,
  };
};

export const deleteVendedor = (id) => {
  return {
    type: DELETE_VENDEDOR_REQUEST,
    id,
  };
};
