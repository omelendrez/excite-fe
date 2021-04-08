import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "../../services";

const endpoint = "transportes";

function getTransportes() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getTransporte(id) {
  return getRecordById(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addTransporte(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateTransporte(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteTransporte(id) {
  return deleteRecord(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchTransportesSaga() {
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

function* fetchTransporteSaga(action) {
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

function* addTransporteSaga(action) {
  try {
    const record = yield call(addTransporte, action.newData);
    yield put({
      type: types.ADD_TRANSPORTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_TRANSPORTE_FAILED,
      payload: error.message,
    });
  }
}

function* updateTransporteSaga(action) {
  try {
    const record = yield call(updateTransporte, action.newData);
    yield put({
      type: types.UPDATE_TRANSPORTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_TRANSPORTE_FAILED,
      payload: error.message,
    });
  }
}

function* deleteTransporteSaga(action) {
  try {
    const record = yield call(deleteTransporte, action.id);
    yield put({
      type: types.DELETE_TRANSPORTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_TRANSPORTE_FAILED,
      payload: error.message,
    });
  }
}

function* transportesSaga() {
  yield takeEvery(types.GET_TRANSPORTES_REQUEST, fetchTransportesSaga);
  yield takeEvery(types.GET_TRANSPORTE_REQUEST, fetchTransporteSaga);
  yield takeEvery(types.ADD_TRANSPORTE_REQUEST, addTransporteSaga);
  yield takeEvery(types.UPDATE_TRANSPORTE_REQUEST, updateTransporteSaga);
  yield takeEvery(types.DELETE_TRANSPORTE_REQUEST, deleteTransporteSaga);
}

export default transportesSaga;
