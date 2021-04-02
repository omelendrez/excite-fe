import * as types from "../types";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const clientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CLIENTES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_CLIENTES_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_CLIENTES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default clientesReducer;
