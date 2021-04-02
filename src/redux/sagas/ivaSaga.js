import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getIva() {
  return getRecords("iva")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchIva() {
  try {
    const records = yield call(getIva);
    yield put({
      type: types.GET_IVA_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_IVA_FAILED,
      payload: error.message,
    });
  }
}

function* ivaSaga() {
  yield takeEvery(types.GET_IVA_REQUEST, fetchIva);
}

export default ivaSaga;
