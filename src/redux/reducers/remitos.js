import * as types from "redux/types";

const initialState = {
  records: [],
  record: {},
  items: [],
  item: {},
  loading: false,
  success: false,
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
    case types.ADD_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
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
    case types.GET_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload,
        error: null,
      };
    case types.GET_ITEM_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CLEAN_ITEM:
      return {
        ...state,
        loading: false,
        item: action.data,
        error: null,
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
    case types.DELETE_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.ADD_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        item: action.payload,
        error: null,
      };
    case types.ADD_ITEM_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.UPDATE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        item: action.payload,
        error: null,
      };
    case types.UPDATE_ITEM_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        item: action.payload,
        error: null,
      };
    case types.DELETE_ITEM_FAILED:
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

export default remitosReducer;
