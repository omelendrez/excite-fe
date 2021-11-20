export const GET_FACTURA_REQUEST = "GET_FACTURA_REQUEST";
export const GET_FACTURA_SUCCESS = "GET_FACTURA_SUCCESS";
export const GET_FACTURA_FAILED = "GET_FACTURA_FAILED";

export const getFactura = (id) => {
  return {
    type: GET_FACTURA_REQUEST,
    id
  };
};
