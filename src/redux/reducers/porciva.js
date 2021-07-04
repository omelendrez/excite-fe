import * as types from "redux/actions";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const porcivaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PORCIVA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PORCIVA_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_PORCIVA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default porcivaReducer;
