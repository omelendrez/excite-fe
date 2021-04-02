import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getSubtipos() {
  return getRecords("subtipos")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchSubtipos() {
  try {
    const records = yield call(getSubtipos);
    yield put({
      type: types.GET_SUBTIPOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_SUBTIPOS_FAILED,
      payload: error.message,
    });
  }
}

function* subtiposSaga() {
  yield takeEvery(types.GET_SUBTIPOS_REQUEST, fetchSubtipos);
}

export default subtiposSaga;
