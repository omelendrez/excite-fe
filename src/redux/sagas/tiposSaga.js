import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "services";

const endpoint = "tipos";

function getTipos() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getTiposSubtipos(id) {
  return getRecords(`${endpoint}-subtipos/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getTipo(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addTipo(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateTipo(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteTipo(id) {
  return deleteRecord(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchTiposSaga() {
  try {
    const records = yield call(getTipos);
    yield put({
      type: types.GET_TIPOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_TIPOS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchTiposSubtiposSaga(action) {
  try {
    const records = yield call(getTiposSubtipos, action.id);
    yield put({
      type: types.GET_TIPOS_SUBTIPOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_TIPOS_SUBTIPOS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchTipoSaga(action) {
  try {
    const record = yield call(getTipo, action.id);
    yield put({
      type: types.GET_TIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_TIPO_FAILED,
      payload: error.message,
    });
  }
}

function* addTipoSaga(action) {
  try {
    const record = yield call(addTipo, action.newData);
    yield put({
      type: types.ADD_TIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_TIPO_FAILED,
      payload: error.message,
    });
  }
}

function* updateTipoSaga(action) {
  try {
    const record = yield call(updateTipo, action.newData);
    yield put({
      type: types.UPDATE_TIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_TIPO_FAILED,
      payload: error.message,
    });
  }
}

function* deleteTipoSaga(action) {
  try {
    const record = yield call(deleteTipo, action.id);
    yield put({
      type: types.DELETE_TIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_TIPO_FAILED,
      payload: error.message,
    });
  }
}

function* tiposSaga() {
  yield takeEvery(types.GET_TIPOS_REQUEST, fetchTiposSaga);
  yield takeEvery(types.GET_TIPOS_SUBTIPOS_REQUEST, fetchTiposSubtiposSaga);
  yield takeEvery(types.GET_TIPO_REQUEST, fetchTipoSaga);
  yield takeEvery(types.ADD_TIPO_REQUEST, addTipoSaga);
  yield takeEvery(types.UPDATE_TIPO_REQUEST, updateTipoSaga);
  yield takeEvery(types.DELETE_TIPO_REQUEST, deleteTipoSaga);
}

export default tiposSaga;
