import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getNumeros() {
  return getRecords("numeros")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchNumeros() {
  try {
    const records = yield call(getNumeros);
    yield put({
      type: types.GET_NUMEROS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_NUMEROS_FAILED,
      payload: error.message,
    });
  }
}

function* numerosSaga() {
  yield takeLatest(types.GET_NUMEROS_REQUEST, fetchNumeros);
}

export default numerosSaga;
