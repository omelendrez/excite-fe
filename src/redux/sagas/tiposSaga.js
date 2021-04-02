import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getTipos() {
  return getRecords("tipos")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchTipos() {
  try {
    const records = yield call(getTipos);
    yield put({
      type: types.GET_TIPOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_TIPOS_FAILED,
      payload: error.message,
    });
  }
}

function* tiposSaga() {
  yield takeEvery(types.GET_TIPOS_REQUEST, fetchTipos);
}

export default tiposSaga;
