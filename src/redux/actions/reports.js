import { formatDatePost } from 'utils/helpers'

export const GET_SALES_BY_PRODUCT_REQUEST = 'GET_SALES_BY_PRODUCT_REQUEST'
export const GET_SALES_BY_PRODUCT_SUCCESS = 'GET_SALES_BY_PRODUCT_SUCCESS'
export const GET_SALES_BY_PRODUCT_FAILED = 'GET_SALES_BY_PRODUCT_FAILED'

export const getSalesByProduct = ({ PRODCOD, REMFEC_FROM, REMFEC_TO }) => {
  return {
    type: GET_SALES_BY_PRODUCT_REQUEST,
    PRODCOD,
    REMFEC_FROM: formatDatePost(REMFEC_FROM),
    REMFEC_TO: formatDatePost(REMFEC_TO)
  }
}
