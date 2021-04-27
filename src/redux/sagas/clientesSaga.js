import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "../../services";

const endpoint = "clientes";

function getClientes() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getActiveClientes(id) {
  return getRecordById(`${endpoint}-activos/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getCliente(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addCliente(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateCliente(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteCliente(id) {
  return deleteRecord(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchClientesSaga() {
  try {
    const records = yield call(getClientes);
    yield put({
      type: types.GET_CLIENTES_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_CLIENTES_FAILED,
      payload: error.message,
    });
  }
}

function* fetchActiveClientesSaga(action) {
  try {
    const records = yield call(getActiveClientes, action.id);
    yield put({
      type: types.GET_ACTIVE_CLIENTES_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_ACTIVE_CLIENTES_FAILED,
      payload: error.message,
    });
  }
}

function* fetchClienteSaga(action) {
  try {
    const record = yield call(getCliente, action.id);
    yield put({
      type: types.GET_CLIENTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_CLIENTE_FAILED,
      payload: error.message,
    });
  }
}

function* addClienteSaga(action) {
  try {
    const record = yield call(addCliente, action.newData);
    yield put({
      type: types.ADD_CLIENTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_CLIENTE_FAILED,
      payload: error.message,
    });
  }
}

function* updateClienteSaga(action) {
  try {
    const record = yield call(updateCliente, action.newData);
    yield put({
      type: types.UPDATE_CLIENTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_CLIENTE_FAILED,
      payload: error.message,
    });
  }
}

function* deleteClienteSaga(action) {
  try {
    const record = yield call(deleteCliente, action.id);
    yield put({
      type: types.DELETE_CLIENTE_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_CLIENTE_FAILED,
      payload: error.message,
    });
  }
}

function* clientesSaga() {
  yield takeEvery(types.GET_CLIENTES_REQUEST, fetchClientesSaga);
  yield takeEvery(types.GET_ACTIVE_CLIENTES_REQUEST, fetchActiveClientesSaga);
  yield takeEvery(types.GET_CLIENTE_REQUEST, fetchClienteSaga);
  yield takeEvery(types.ADD_CLIENTE_REQUEST, addClienteSaga);
  yield takeEvery(types.UPDATE_CLIENTE_REQUEST, updateClienteSaga);
  yield takeEvery(types.DELETE_CLIENTE_REQUEST, deleteClienteSaga);
}

export default clientesSaga;
