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
    default:
      return state;
  }
};

export default pagosReducer;
