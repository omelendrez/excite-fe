import { takeEvery, call } from "redux-saga/effects";
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
    yield call(wakeUp);
  } catch (error) {
    console.log(error);
  }
}

function* wakeUpSagas() {
  yield takeEvery(types.WAKE_UP, wakeUpSaga);
}

export default wakeUpSagas;
