import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/actions";
import { getRecords } from "services";

const endpoint = "provincias";

function getProvincias() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchProvincias() {
  try {
    const records = yield call(getProvincias);
    yield put({
      type: types.GET_PROVINCIAS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_PROVINCIAS_FAILED,
      payload: error.message,
    });
  }
}

function* provinciasSaga() {
  yield takeEvery(types.GET_PROVINCIAS_REQUEST, fetchProvincias);
}

export default provinciasSaga;
