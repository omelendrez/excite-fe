export const GET_FACTURA_REQUEST = "GET_FACTURA_REQUEST";
export const GET_FACTURA_SUCCESS = "GET_FACTURA_SUCCESS";
export const GET_FACTURA_FAILED = "GET_FACTURA_FAILED";

export const CREATE_FACTURA_REQUEST = "CREATE_FACTURA_REQUEST";
export const CREATE_FACTURA_SUCCESS = "CREATE_FACTURA_SUCCESS";
export const CREATE_FACTURA_FAILED = "CREATE_FACTURA_FAILED";


export const getFactura = (id) => {
  return {
    type: GET_FACTURA_REQUEST,
    id
  };
};

export const createFactura = (id) => {
  return {
    type: CREATE_FACTURA_REQUEST,
    id
  };
};
