import * as types from "redux/actions";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const estadosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ESTADOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ESTADOS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_ESTADOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default estadosReducer;
