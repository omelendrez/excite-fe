import * as types from "../types";

const initialState = {
  records: [],
  record: {},
  items: [],
  loading: false,
  error: null,
};

const remitosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REMITOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_REMITOS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_REMITOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    case types.GET_ITEMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default remitosReducer;
