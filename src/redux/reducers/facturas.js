import * as types from "redux/actions";

const initialState = {
  record: {},
  items: [],
  loading: false,
  error: null,
};

const facturasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FACTURA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_FACTURA_SUCCESS:
      const { record, items } = action.payload
      return {
        ...state,
        loading: false,
        record,
        items,
        error: null,
      };
    case types.GET_FACTURA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    case types.CREATE_FACTURA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CREATE_FACTURA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.CREATE_FACTURA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default facturasReducer;
