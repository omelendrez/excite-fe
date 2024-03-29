import * as types from 'redux/actions'

const initialState = {
  salesByProduct: [],
  salesBySubtype: [],
  loading: false,
  error: null
}

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SALES_BY_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case types.GET_SALES_BY_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        salesByProduct: action.payload,
        error: null
      }
    case types.GET_SALES_BY_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case types.GET_SALES_BY_SUBTYPE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case types.GET_SALES_BY_SUBTYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        salesBySubtype: action.payload,
        error: null
      }
    case types.GET_SALES_BY_SUBTYPE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default reportsReducer
