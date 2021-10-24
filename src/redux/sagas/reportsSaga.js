import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from 'redux/actions'
import { getRecordById } from 'services'

function getSalesByProduct ({ PRODCOD, REMFEC_FROM, REMFEC_TO }) {
  return getRecordById(`productos-ventas-producto/${PRODCOD}?q=${REMFEC_FROM}&q=${REMFEC_TO}`)
    .then((response) => response)
    .catch((error) => {
      throw error
    })
}

function* fetchSalesByProductSaga (action) {
  try {
    const records = yield call(getSalesByProduct, action)
    yield put({
      type: types.GET_SALES_BY_PRODUCT_SUCCESS,
      payload: records
    })
  } catch (error) {
    yield put({
      type: types.GET_SALES_BY_PRODUCT_FAILED,
      payload: error.message
    })
  }
}

function getSalesBySubtype ({ REMFEC_FROM, REMFEC_TO }) {
  return getRecordById(`productos-ventas-subtipo?q=${REMFEC_FROM}&q=${REMFEC_TO}`)
    .then((response) => response)
    .catch((error) => {
      throw error
    })
}

function* fetchSalesBySubtypeSaga (action) {
  try {
    const records = yield call(getSalesBySubtype, action)
    yield put({
      type: types.GET_SALES_BY_SUBTYPE_SUCCESS,
      payload: records
    })
  } catch (error) {
    yield put({
      type: types.GET_SALES_BY_SUBTYPE_FAILED,
      payload: error.message
    })
  }
}

function* reportsSaga () {
  yield takeEvery(types.GET_SALES_BY_PRODUCT_REQUEST, fetchSalesByProductSaga)
  yield takeEvery(types.GET_SALES_BY_SUBTYPE_REQUEST, fetchSalesBySubtypeSaga)
}

export default reportsSaga
