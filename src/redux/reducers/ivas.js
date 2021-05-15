import * as types from "redux/types";

const initialState = {
  record: {},
  records: [],
  loading: false,
  success: false,
  error: null,
};

const ivasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_IVAS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_IVAS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_IVAS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_IVA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_IVA_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_IVA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_IVA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_IVA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_IVA_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_IVA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_IVA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_IVA_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_IVA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_IVA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_IVA_FAILED:
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

export default ivasReducer;
