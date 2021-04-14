import * as types from "../types";

const initialState = {
  record: {},
  records: [],
  loading: false,
  success: false,
  error: null,
};

const numerosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NUMEROS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_NUMEROS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_NUMEROS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_NUMERO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_NUMERO_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_NUMERO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_NUMERO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_NUMERO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_NUMERO_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_NUMERO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_NUMERO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_NUMERO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_NUMERO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_NUMERO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_NUMERO_FAILED:
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

export default numerosReducer;
