import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "services";

const endpoint = "conceptos";

function getConceptos() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getConcepto(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addConcepto(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateConcepto(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteConcepto(id) {
  return deleteRecord(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchConceptosSaga() {
  try {
    const records = yield call(getConceptos);
    yield put({
      type: types.GET_CONCEPTOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_CONCEPTOS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchConceptoSaga(action) {
  try {
    const record = yield call(getConcepto, action.id);
    yield put({
      type: types.GET_CONCEPTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_CONCEPTO_FAILED,
      payload: error.message,
    });
  }
}

function* addConceptoSaga(action) {
  try {
    const record = yield call(addConcepto, action.newData);
    yield put({
      type: types.ADD_CONCEPTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_CONCEPTO_FAILED,
      payload: error.message,
    });
  }
}

function* updateConceptoSaga(action) {
  try {
    const record = yield call(updateConcepto, action.newData);
    yield put({
      type: types.UPDATE_CONCEPTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_CONCEPTO_FAILED,
      payload: error.message,
    });
  }
}

function* deleteConceptoSaga(action) {
  try {
    const record = yield call(deleteConcepto, action.id);
    yield put({
      type: types.DELETE_CONCEPTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_CONCEPTO_FAILED,
      payload: error.message,
    });
  }
}

function* ConceptosSaga() {
  yield takeEvery(types.GET_CONCEPTOS_REQUEST, fetchConceptosSaga);
  yield takeEvery(types.GET_CONCEPTO_REQUEST, fetchConceptoSaga);
  yield takeEvery(types.ADD_CONCEPTO_REQUEST, addConceptoSaga);
  yield takeEvery(types.UPDATE_CONCEPTO_REQUEST, updateConceptoSaga);
  yield takeEvery(types.DELETE_CONCEPTO_REQUEST, deleteConceptoSaga);
}

export default ConceptosSaga;
