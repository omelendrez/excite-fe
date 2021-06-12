import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/types";
import { getRecords, getRecordById } from "services";
const endpoint = "pagos";

function getPagos() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getPago(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getPagosRemitos(id) {
  return getRecordById(`${endpoint}/${id}/remitos`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getPagosValores(id) {
  return getRecordById(`${endpoint}/${id}/valores`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchPagos() {
  try {
    const records = yield call(getPagos);
    yield put({
      type: types.GET_PAGOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_PAGOS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchPagoSaga(action) {
  try {
    const record = yield call(getPago, action.id);
    const remitos = yield call(getPagosRemitos, record.PAGNUM);
    const valores = yield call(getPagosValores, record.PAGNUM);
    yield put({
      type: types.GET_PAGO_SUCCESS,
      payload: { record, remitos, valores },
    });
  } catch (error) {
    yield put({
      type: types.GET_PAGO_FAILED,
      payload: error.message,
    });
  }
}

function* pagosSaga() {
  yield takeEvery(types.GET_PAGOS_REQUEST, fetchPagos);
  yield takeEvery(types.GET_PAGO_REQUEST, fetchPagoSaga);
}

export default pagosSaga;
