import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getAjustes() {
  return getRecords("ajustes")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchAjustes() {
  try {
    const records = yield call(getAjustes);
    yield put({
      type: types.GET_AJUSTES_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_AJUSTES_FAILED,
      payload: error.message,
    });
  }
}

function* ajustesSaga() {
  yield takeEvery(types.GET_AJUSTES_REQUEST, fetchAjustes);
}

export default ajustesSaga;
