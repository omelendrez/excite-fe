import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "../../services";

const endpoint = "ivas";

function getIvas() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}
function getIva(id) {
  return getRecordById(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addIva(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateIva(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteIva(id) {
  return deleteRecord(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchIvasSaga() {
  try {
    const records = yield call(getIvas);
    yield put({
      type: types.GET_IVAS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_IVAS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchIvaSaga(action) {
  try {
    const record = yield call(getIva, action.id);
    yield put({
      type: types.GET_IVA_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_IVA_FAILED,
      payload: error.message,
    });
  }
}

function* addIvaSaga(action) {
  try {
    const record = yield call(addIva, action.newData);
    yield put({
      type: types.ADD_IVA_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_IVA_FAILED,
      payload: error.message,
    });
  }
}

function* updateIvaSaga(action) {
  try {
    const record = yield call(updateIva, action.newData);
    yield put({
      type: types.UPDATE_IVA_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_IVA_FAILED,
      payload: error.message,
    });
  }
}

function* deleteIvaSaga(action) {
  try {
    const record = yield call(deleteIva, action.id);
    yield put({
      type: types.DELETE_IVA_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_IVA_FAILED,
      payload: error.message,
    });
  }
}

function* ivaSaga() {
  yield takeEvery(types.GET_IVAS_REQUEST, fetchIvasSaga);
  yield takeEvery(types.GET_IVA_REQUEST, fetchIvaSaga);
  yield takeEvery(types.ADD_IVA_REQUEST, addIvaSaga);
  yield takeEvery(types.UPDATE_IVA_REQUEST, updateIvaSaga);
  yield takeEvery(types.DELETE_IVA_REQUEST, deleteIvaSaga);
}

export default ivaSaga;
