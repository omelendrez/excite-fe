import * as types from "redux/types";

const initialState = {
  records: [],
  record: {},
  remitos: [],
  remito: {},
  valores: [],
  valor: {},
  loading: false,
  error: null,
};

const pagosReducer = (state = initialState, action) => {
  switch (action.type) {
    // Pagos
    case types.GET_PAGOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PAGOS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null,
      };
    case types.GET_PAGOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_PAGO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // Pago
    case types.GET_PAGO_SUCCESS:
      const { record, remitos, valores } = action.payload;
      return {
        ...state,
        loading: false,
        record,
        remitos,
        valores,
        error: null,
      };
    case types.GET_PAGO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.ADD_PAGO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_PAGO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.ADD_PAGO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case types.DELETE_PAGO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_PAGO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        record: action.payload,
        error: null,
      };
    case types.DELETE_PAGO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    // Pago Remito
    case types.GET_PAGO_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PAGO_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        remito: action.payload,
        error: null,
      };
    case types.GET_PAGO_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CLEAN_PAGO_REMITO:
      return {
        ...state,
        loading: false,
        remito: action.data,
        error: null,
      };

    case types.ADD_PAGO_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_PAGO_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        remito: action.payload,
        error: null,
      };
    case types.ADD_PAGO_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case types.UPDATE_PAGO_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_PAGO_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        remito: action.payload,
        error: null,
      };
    case types.UPDATE_PAGO_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case types.DELETE_PAGO_REMITO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_PAGO_REMITO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        remito: action.payload,
        error: null,
      };
    case types.DELETE_PAGO_REMITO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    // Pago Valor
    case types.GET_PAGO_VALOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PAGO_VALOR_SUCCESS:
      return {
        ...state,
        loading: false,
        valor: action.payload,
        error: null,
      };
    case types.GET_PAGO_VALOR_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CLEAN_PAGO_VALOR:
      return {
        ...state,
        loading: false,
        valor: action.data,
        error: null,
      };

    case types.ADD_PAGO_VALOR_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.ADD_PAGO_VALOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        valor: action.payload,
        error: null,
      };
    case types.ADD_PAGO_VALOR_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case types.UPDATE_PAGO_VALOR_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.UPDATE_PAGO_VALOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        valor: action.payload,
        error: null,
      };
    case types.UPDATE_PAGO_VALOR_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case types.DELETE_PAGO_VALOR_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.DELETE_PAGO_VALOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        valor: action.payload,
        error: null,
      };
    case types.DELETE_PAGO_VALOR_FAILED:
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

export default pagosReducer;
