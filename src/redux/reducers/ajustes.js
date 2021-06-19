import * as types from "redux/types";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const ajustesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AJUSTES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_AJUSTES_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_AJUSTES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_AJUSTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_AJUSTE_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_AJUSTE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_AJUSTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_AJUSTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_AJUSTE_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_AJUSTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_AJUSTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_AJUSTE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_AJUSTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_AJUSTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_AJUSTE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.RESET_AJUSTES:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
      };

    default:
      return state;
  }
};

export default ajustesReducer;
