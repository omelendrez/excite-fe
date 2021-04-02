import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getRemitos() {
  return getRecords("remitos")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchRemitos() {
  try {
    const records = yield call(getRemitos);
    yield put({
      type: types.GET_REMITOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_REMITOS_FAILED,
      payload: error.message,
    });
  }
}

function* remitosSaga() {
  yield takeEvery(types.GET_REMITOS_REQUEST, fetchRemitos);
}

export default remitosSaga;
