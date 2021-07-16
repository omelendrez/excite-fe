export const GET_CLIENTES_REQUEST = "GET_CLIENTES_REQUEST";
export const GET_CLIENTES_SUCCESS = "GET_CLIENTES_SUCCESS";
export const GET_CLIENTES_FAILED = "GET_CLIENTES_FAILED";

export const GET_ACTIVE_CLIENTES_REQUEST = "GET_ACTIVE_CLIENTES_REQUEST";
export const GET_ACTIVE_CLIENTES_SUCCESS = "GET_ACTIVE_CLIENTES_SUCCESS";
export const GET_ACTIVE_CLIENTES_FAILED = "GET_ACTIVE_CLIENTES_FAILED";

export const GET_CLIENTE_REQUEST = "GET_CLIENTE_REQUEST";
export const GET_CLIENTE_SUCCESS = "GET_CLIENTE_SUCCESS";
export const GET_CLIENTE_FAILED = "GET_CLIENTE_FAILED";

export const ADD_CLIENTE_REQUEST = "ADD_CLIENTE_REQUEST";
export const ADD_CLIENTE_SUCCESS = "ADD_CLIENTE_SUCCESS";
export const ADD_CLIENTE_FAILED = "ADD_CLIENTE_FAILED";

export const UPDATE_CLIENTE_REQUEST = "UPDATE_CLIENTE_REQUEST";
export const UPDATE_CLIENTE_SUCCESS = "UPDATE_CLIENTE_SUCCESS";
export const UPDATE_CLIENTE_FAILED = "UPDATE_CLIENTE_FAILED";

export const DELETE_CLIENTE_REQUEST = "DELETE_CLIENTE_REQUEST";
export const DELETE_CLIENTE_SUCCESS = "DELETE_CLIENTE_SUCCESS";
export const DELETE_CLIENTE_FAILED = "DELETE_CLIENTE_FAILED";

export const ADD_CLIENTE_TIPO_REQUEST = "ADD_CLIENTE_TIPO_REQUEST";
export const ADD_CLIENTE_TIPO_SUCCESS = "ADD_CLIENTE_TIPO_SUCCESS";
export const ADD_CLIENTE_TIPO_FAILED = "ADD_CLIENTE_TIPO_FAILED";

export const GET_CLIENTE_TIPO_REQUEST = "GET_CLIENTE_TIPO_REQUEST";
export const GET_CLIENTE_TIPO_SUCCESS = "GET_CLIENTE_TIPO_SUCCESS";
export const GET_CLIENTE_TIPO_FAILED = "GET_CLIENTE_TIPO_FAILED";

export const UPDATE_CLIENTE_TIPO_REQUEST = "UPDATE_CLIENTE_TIPO_REQUEST";
export const UPDATE_CLIENTE_TIPO_SUCCESS = "UPDATE_CLIENTE_TIPO_SUCCESS";
export const UPDATE_CLIENTE_TIPO_FAILED = "UPDATE_CLIENTE_TIPO_FAILED";

export const DELETE_CLIENTE_TIPO_REQUEST = "DELETE_CLIENTE_TIPO_REQUEST";
export const DELETE_CLIENTE_TIPO_SUCCESS = "DELETE_CLIENTE_TIPO_SUCCESS";
export const DELETE_CLIENTE_TIPO_FAILED = "DELETE_CLIENTE_TIPO_FAILED";

export const getClientes = () => {
  return {
    type: GET_CLIENTES_REQUEST,
  };
};

export const getActiveClientes = (id) => {
  return {
    type: GET_ACTIVE_CLIENTES_REQUEST,
    id,
  };
};

export const getCliente = (id) => {
  return {
    type: GET_CLIENTE_REQUEST,
    id,
  };
};

export const addCliente = (newData) => {
  return {
    type: ADD_CLIENTE_REQUEST,
    newData,
  };
};

export const updateCliente = (id, newData) => {
  return {
    type: UPDATE_CLIENTE_REQUEST,
    id,
    newData,
  };
};

export const deleteCliente = (id) => {
  return {
    type: DELETE_CLIENTE_REQUEST,
    id,
  };
};

export const addClienteTipo = (newData) => {
  return {
    type: ADD_CLIENTE_TIPO_REQUEST,
    newData,
  };
};

export const getClienteTipo = (id) => {
  return {
    type: GET_CLIENTE_TIPO_REQUEST,
    id,
  };
};

export const updateClienteTipo = (id, newData) => {
  return {
    type: UPDATE_CLIENTE_TIPO_REQUEST,
    id,
    newData,
  };
};

export const deleteClienteTipo = (id) => {
  return {
    type: DELETE_CLIENTE_TIPO_REQUEST,
    id,
  };
};
