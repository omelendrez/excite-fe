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
    default:
      return state;
  }
};

export default provinciasReducer;
