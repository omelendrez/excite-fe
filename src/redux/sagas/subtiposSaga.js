import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "services";
const endpoint = "subtipos";

function getSubtipos() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}
function getSubtipo(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addSubtipo(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateSubtipo(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteSubtipo(id) {
  return deleteRecord(`${endpoint}/${id}`)
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
function* fetchSubtipoSaga(action) {
  try {
    const record = yield call(getSubtipo, action.id);
    yield put({
      type: types.GET_SUBTIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_SUBTIPO_FAILED,
      payload: error.message,
    });
  }
}

function* addSubtipoSaga(action) {
  try {
    const record = yield call(addSubtipo, action.newData);
    yield put({
      type: types.ADD_SUBTIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_SUBTIPO_FAILED,
      payload: error.message,
    });
  }
}

function* updateSubtipoSaga(action) {
  try {
    const record = yield call(updateSubtipo, action.newData);
    yield put({
      type: types.UPDATE_SUBTIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_SUBTIPO_FAILED,
      payload: error.message,
    });
  }
}

function* deleteSubtipoSaga(action) {
  try {
    const record = yield call(deleteSubtipo, action.id);
    yield put({
      type: types.DELETE_SUBTIPO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_SUBTIPO_FAILED,
      payload: error.message,
    });
  }
}

function* subtiposSaga() {
  yield takeEvery(types.GET_SUBTIPOS_REQUEST, fetchSubtipos);
  yield takeEvery(types.GET_SUBTIPO_REQUEST, fetchSubtipoSaga);
  yield takeEvery(types.ADD_SUBTIPO_REQUEST, addSubtipoSaga);
  yield takeEvery(types.UPDATE_SUBTIPO_REQUEST, updateSubtipoSaga);
  yield takeEvery(types.DELETE_SUBTIPO_REQUEST, deleteSubtipoSaga);
}

export default subtiposSaga;
