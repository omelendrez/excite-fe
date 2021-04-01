import * as types from "../types";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const ivaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_IVA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_IVA_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_IVA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ivaReducer;
