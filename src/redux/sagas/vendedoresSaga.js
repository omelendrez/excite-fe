import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/actions";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "services";

const endpoint = "vendedores";

function getVendedores() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getVendedor(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addVendedor(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateVendedor(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteVendedor(id) {
  return deleteRecord(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchVendedoresSaga() {
  try {
    const records = yield call(getVendedores);
    yield put({
      type: types.GET_VENDEDORES_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_VENDEDORES_FAILED,
      payload: error.message,
    });
  }
}

function* fetchVendedorSaga(action) {
  try {
    const record = yield call(getVendedor, action.id);
    yield put({
      type: types.GET_VENDEDOR_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_VENDEDOR_FAILED,
      payload: error.message,
    });
  }
}

function* addVendedorSaga(action) {
  try {
    const record = yield call(addVendedor, action.newData);
    yield put({
      type: types.ADD_VENDEDOR_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_VENDEDORES_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.ADD_VENDEDOR_FAILED,
      payload: error.message,
    });
  }
}

function* updateVendedorSaga(action) {
  try {
    const record = yield call(updateVendedor, action.newData);
    yield put({
      type: types.UPDATE_VENDEDOR_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_VENDEDORES_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_VENDEDOR_FAILED,
      payload: error.message,
    });
  }
}

function* deleteVendedorSaga(action) {
  try {
    const record = yield call(deleteVendedor, action.id);
    yield put({
      type: types.DELETE_VENDEDOR_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_VENDEDORES_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_VENDEDOR_FAILED,
      payload: error.message,
    });
  }
}

function* vendedoresSaga() {
  yield takeEvery(types.GET_VENDEDORES_REQUEST, fetchVendedoresSaga);
  yield takeEvery(types.GET_VENDEDOR_REQUEST, fetchVendedorSaga);
  yield takeEvery(types.ADD_VENDEDOR_REQUEST, addVendedorSaga);
  yield takeEvery(types.UPDATE_VENDEDOR_REQUEST, updateVendedorSaga);
  yield takeEvery(types.DELETE_VENDEDOR_REQUEST, deleteVendedorSaga);
}

export default vendedoresSaga;
