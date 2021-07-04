export const GET_ESTADOS_REQUEST = "GET_ESTADOS_REQUEST";
export const GET_ESTADOS_SUCCESS = "GET_ESTADOS_SUCCESS";
export const GET_ESTADOS_FAILED = "GET_ESTADOS_FAILED";

export const getEstados = () => {
  return {
    type: GET_ESTADOS_REQUEST,
  };
};
