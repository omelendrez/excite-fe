import * as types from "../types";

const initialState = {
  record: {},
  records: [],
  loading: false,
  success: false,
  error: null,
};

const transportesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TRANSPORTES_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_TRANSPORTES_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_TRANSPORTES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_TRANSPORTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_TRANSPORTE_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_TRANSPORTE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_TRANSPORTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_TRANSPORTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_TRANSPORTE_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_TRANSPORTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_TRANSPORTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_TRANSPORTE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_TRANSPORTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_TRANSPORTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_TRANSPORTE_FAILED:
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

export default transportesReducer;
