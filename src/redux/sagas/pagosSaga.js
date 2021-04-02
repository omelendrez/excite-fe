import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getPagos() {
  return getRecords("pagos")
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

function* pagosSaga() {
  yield takeLatest(types.GET_PAGOS_REQUEST, fetchPagos);
}

export default pagosSaga;
