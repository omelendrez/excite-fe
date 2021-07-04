import * as types from "redux/actions";

const initialState = {
  records: [],
  record: {},
  subtipos: [],
  changedPrices: 0,
  loading: false,
  error: null,
};

const tiposReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TIPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_TIPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_TIPOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_TIPOS_SUBTIPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_TIPOS_SUBTIPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        subtipos: action.payload,
        error: null,
      };
    case types.GET_TIPOS_SUBTIPOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_TIPO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_TIPO_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_TIPO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_TIPO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_TIPO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_TIPO_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_TIPO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_TIPO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_TIPO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.CHANGE_PRICE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        changedPrices: 0,
        error: null,
      };
    case types.CHANGE_PRICE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        changedPrices: action.payload.affectedRows,
        error: null,
      };
    case types.CHANGE_PRICE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        changedPrices: 0,
        error: action.payload,
      };
    case types.DELETE_TIPO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_TIPO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_TIPO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.TIPOS_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        changedPrices: 0,
        error: null,
      };

    default:
      return state;
  }
};

export default tiposReducer;
