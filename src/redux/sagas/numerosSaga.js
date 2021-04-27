import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "../../services";

const endpoint = "numeros";

function getNumeros() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getNumero(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addNumero(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateNumero(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteNumero(id) {
  return deleteRecord(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchNumerosSaga() {
  try {
    const records = yield call(getNumeros);
    yield put({
      type: types.GET_NUMEROS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_NUMEROS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchNumeroSaga(action) {
  try {
    const record = yield call(getNumero, action.id);
    yield put({
      type: types.GET_NUMERO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_NUMERO_FAILED,
      payload: error.message,
    });
  }
}

function* addNumeroSaga(action) {
  try {
    const record = yield call(addNumero, action.newData);
    yield put({
      type: types.ADD_NUMERO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_NUMERO_FAILED,
      payload: error.message,
    });
  }
}

function* updateNumeroSaga(action) {
  try {
    const record = yield call(updateNumero, action.newData);
    yield put({
      type: types.UPDATE_NUMERO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_NUMERO_FAILED,
      payload: error.message,
    });
  }
}

function* deleteNumeroSaga(action) {
  try {
    const record = yield call(deleteNumero, action.id);
    yield put({
      type: types.DELETE_NUMERO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_NUMERO_FAILED,
      payload: error.message,
    });
  }
}

function* numerosSaga() {
  yield takeEvery(types.GET_NUMEROS_REQUEST, fetchNumerosSaga);
  yield takeEvery(types.GET_NUMERO_REQUEST, fetchNumeroSaga);
  yield takeEvery(types.ADD_NUMERO_REQUEST, addNumeroSaga);
  yield takeEvery(types.UPDATE_NUMERO_REQUEST, updateNumeroSaga);
  yield takeEvery(types.DELETE_NUMERO_REQUEST, deleteNumeroSaga);
}

export default numerosSaga;
