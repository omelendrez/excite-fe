import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "../../services";

const endpoint = "ajustes";

function getAjustes() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getAjuste(id) {
  return getRecordById(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addAjuste(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateAjuste(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteAjuste(id) {
  return deleteRecord(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchAjustesSaga() {
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

function* fetchAjusteSaga(action) {
  try {
    const record = yield call(getAjuste, action.id);
    yield put({
      type: types.GET_AJUSTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_AJUSTE_FAILED,
      payload: error.message,
    });
  }
}

function* addAjusteSaga(action) {
  try {
    const record = yield call(addAjuste, action.newData);
    yield put({
      type: types.ADD_AJUSTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_AJUSTE_FAILED,
      payload: error.message,
    });
  }
}

function* updateAjusteSaga(action) {
  try {
    const record = yield call(updateAjuste, action.newData);
    yield put({
      type: types.UPDATE_AJUSTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_AJUSTE_FAILED,
      payload: error.message,
    });
  }
}

function* deleteAjusteSaga(action) {
  try {
    const record = yield call(deleteAjuste, action.id);
    yield put({
      type: types.DELETE_AJUSTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_AJUSTE_FAILED,
      payload: error.message,
    });
  }
}
function* ajustesSaga() {
  yield takeEvery(types.GET_AJUSTES_REQUEST, fetchAjustesSaga);
  yield takeEvery(types.GET_AJUSTE_REQUEST, fetchAjusteSaga);
  yield takeEvery(types.ADD_AJUSTE_REQUEST, addAjusteSaga);
  yield takeEvery(types.UPDATE_AJUSTE_REQUEST, updateAjusteSaga);
  yield takeEvery(types.DELETE_AJUSTE_REQUEST, deleteAjusteSaga);
}

export default ajustesSaga;
