export const GET_PROVINCIAS_REQUEST = "GET_PROVINCIAS_REQUEST";
export const GET_PROVINCIAS_SUCCESS = "GET_PROVINCIAS_SUCCESS";
export const GET_PROVINCIAS_FAILED = "GET_PROVINCIAS_FAILED";

export const getProvincias = () => {
  return {
    type: GET_PROVINCIAS_REQUEST,
  };
};
