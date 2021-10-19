import * as types from "redux/actions";

const initialState = {
  record: {},
  records: [],
  active: [],
  loading: false,
  success: false,
  error: null,
};

const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTOS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_PRODUCTOS_SUCCESS:
      const { records, active } = action.payload;
      return {
        ...state,
        loading: false,
        records,
        active,
        error: null,
      };
    case types.GET_PRODUCTOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_PRODUCTO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_PRODUCTO_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        error: null,
      };
    case types.GET_PRODUCTO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_PRODUCTO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_PRODUCTO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_PRODUCTO_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_PRODUCTO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_PRODUCTO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_PRODUCTO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_PRODUCTO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_PRODUCTO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_PRODUCTO_FAILED:
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

export default productosReducer;
