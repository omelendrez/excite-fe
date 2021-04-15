import * as types from "../types";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const subtiposReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SUBTIPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_SUBTIPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_SUBTIPOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case types.GET_SUBTIPO_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case types.GET_SUBTIPO_SUCCESS:
        return {
          ...state,
          loading: false,
          record: action.payload,
          error: null,
        };
      case types.GET_SUBTIPO_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case types.ADD_SUBTIPO_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case types.ADD_SUBTIPO_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          record: action.payload,
          error: null,
        };
      case types.ADD_SUBTIPO_FAILED:
        return {
          ...state,
          success: false,
          loading: false,
          error: action.payload,
        };
      case types.UPDATE_SUBTIPO_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case types.UPDATE_SUBTIPO_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          record: action.payload,
          error: null,
        };
      case types.UPDATE_SUBTIPO_FAILED:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case types.DELETE_SUBTIPO_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case types.DELETE_SUBTIPO_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          record: action.payload,
          error: null,
        };
      case types.DELETE_SUBTIPO_FAILED:
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
  
  export default subtiposReducer;
  