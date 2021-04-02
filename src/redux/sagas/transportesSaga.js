import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords, getRecordById } from "../../services";

function getTransportes() {
  return getRecords("transportes")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getTransporte(id) {
  return getRecordById("transportes", id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchTransportes() {
  try {
    const records = yield call(getTransportes);
    yield put({
      type: types.GET_TRANSPORTES_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_TRANSPORTES_FAILED,
      payload: error.message,
    });
  }
}

function* fetchTransporte(action) {
  try {
    const record = yield call(getTransporte, action.id);
    yield put({
      type: types.GET_TRANSPORTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_TRANSPORTE_FAILED,
      payload: error.message,
    });
  }
}

function* transportesSaga() {
  yield takeEvery(types.GET_TRANSPORTES_REQUEST, fetchTransportes);
  yield takeEvery(types.GET_TRANSPORTE_REQUEST, fetchTransporte);
}

export default transportesSaga;
