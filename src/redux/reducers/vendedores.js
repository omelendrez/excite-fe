import * as types from "redux/actions";

const initialState = {
  record: {},
  records: [],
  productos: [],
  loading: false,
  success: false,
  error: null,
};

const vendedoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VENDEDORES_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_VENDEDORES_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_VENDEDORES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_VENDEDORES_PRODUCTOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_VENDEDORES_PRODUCTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        productos: action.payload,
        error: null,
      };
    case types.GET_VENDEDORES_PRODUCTOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_VENDEDOR_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_VENDEDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_VENDEDOR_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_VENDEDOR_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_VENDEDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_VENDEDOR_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_VENDEDOR_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_VENDEDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_VENDEDOR_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_VENDEDOR_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_VENDEDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_VENDEDOR_FAILED:
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

export default vendedoresReducer;
