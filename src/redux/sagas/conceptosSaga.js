import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getConceptos() {
  return getRecords("conceptos")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchConceptos() {
  try {
    const records = yield call(getConceptos);
    yield put({
      type: types.GET_CONCEPTOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_CONCEPTOS_FAILED,
      payload: error.message,
    });
  }
}

function* conceptosSaga() {
  yield takeEvery(types.GET_CONCEPTOS_REQUEST, fetchConceptos);
}

export default conceptosSaga;
