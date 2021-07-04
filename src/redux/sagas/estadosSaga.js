import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/actions";
import { getRecords } from "services";

const endpoint = "estados";

function getEstados() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchEstados() {
  try {
    const records = yield call(getEstados);
    yield put({
      type: types.GET_ESTADOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_ESTADOS_FAILED,
      payload: error.message,
    });
  }
}

function* estadosSaga() {
  yield takeEvery(types.GET_ESTADOS_REQUEST, fetchEstados);
}

export default estadosSaga;
