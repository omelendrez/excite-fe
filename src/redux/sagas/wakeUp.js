import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "redux/types";
import { getRecords } from "services";

const endpoint = "wake-up";

function wakeUp() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* wakeUpSaga() {
  try {
    const response = yield call(wakeUp);
    yield put({
      type: types.WAKE_UP_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.WAKE_UP_FAILED,
      payload: error,
    });
    console.log(error);
  }
}

function* wakeUpSagas() {
  yield takeEvery(types.WAKE_UP_REQUEST, wakeUpSaga);
}

export default wakeUpSagas;
