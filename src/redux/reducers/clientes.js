import * as types from "redux/actions";

const initialState = {
  record: {},
  records: [],
  active: [],
  tipos: [],
  tipo: {},
  saldos: [],
  loading: false,
  success: false,
  error: null,
};

const clientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CLIENTES_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_CLIENTES_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_CLIENTES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ACTIVE_CLIENTES_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_ACTIVE_CLIENTES_SUCCESS:
      return {
        ...state,
        loading: false,
        active: action.payload,
        error: null,
      };
    case types.GET_ACTIVE_CLIENTES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_CLIENTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_CLIENTE_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload.record,
        tipos: action.payload.tipos,
        saldos: action.payload.saldos,
        error: null,
      };
    case types.GET_CLIENTE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_CLIENTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_CLIENTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_CLIENTE_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_CLIENTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_CLIENTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.UPDATE_CLIENTE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case types.GET_CLIENTE_TIPO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.GET_CLIENTE_TIPO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        tipo: action.payload,
        error: null,
      };
    case types.GET_CLIENTE_TIPO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.UPDATE_CLIENTE_TIPO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_CLIENTE_TIPO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        tipo: action.payload,
        error: null,
      };
    case types.UPDATE_CLIENTE_TIPO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.DELETE_CLIENTE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_CLIENTE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_CLIENTE_FAILED:
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

export default clientesReducer;
