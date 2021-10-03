import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from 'redux/actions'
import { getRecordById } from 'services'

const endpoint = 'productos-ventas-producto'

function getSalesByProduct({ PRODCOD, REMFEC_FROM, REMFEC_TO }) {
  return getRecordById(`${endpoint}/${PRODCOD}?q=${REMFEC_FROM}&q=${REMFEC_TO}`)
    .then((response) => response)
    .catch((error) => {
      throw error
    })
}

function* fetchSalesByProductSaga(action) {
  try {
    const record = yield call(getSalesByProduct, action)
    yield put({
      type: types.GET_SALES_BY_PRODUCT_SUCCESS,
      payload: record
    })
  } catch (error) {
    yield put({
      type: types.GET_SALES_BY_PRODUCT_FAILED,
      payload: error.message
    })
  }
}

function* reportsSaga() {
  yield takeEvery(types.GET_SALES_BY_PRODUCT_REQUEST, fetchSalesByProductSaga)
}

export default reportsSaga