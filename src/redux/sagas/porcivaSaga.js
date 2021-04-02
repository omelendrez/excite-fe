import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getPorciva() {
  return getRecords("porciva")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchPorciva() {
  try {
    const records = yield call(getPorciva);
    yield put({
      type: types.GET_PORCIVA_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_PORCIVA_FAILED,
      payload: error.message,
    });
  }
}

function* porcivaSaga() {
  yield takeEvery(types.GET_PORCIVA_REQUEST, fetchPorciva);
}

export default porcivaSaga;
