import * as types from "redux/types";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const pagosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PAGOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PAGOS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_PAGOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pagosReducer;
