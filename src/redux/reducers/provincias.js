import * as types from "../types";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const provinciasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROVINCIAS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PROVINCIAS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_PROVINCIAS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.DELETE_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default provinciasReducer;
