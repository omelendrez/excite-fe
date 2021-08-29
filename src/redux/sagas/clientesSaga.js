import { put, takeEvery, call, select } from "redux-saga/effects";
import * as types from "redux/actions";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "services";

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

function getClienteTipos(id) {
  return getRecordById(`${endpoint}/${id}/tipos`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getClienteSaldos(id) {
  return getRecordById(`${endpoint}/${id}/saldos`)
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

function updateCliente(id, newData) {
  return updateRecord(`${endpoint}/${id}`, newData)
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

function addClienteTipo(newData) {
  return addRecord(`${endpoint}/tipos`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getClienteTipo(id) {
  return getRecordById(`${endpoint}/tipos/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateClienteTipo(newData) {
  return updateRecord(`${endpoint}/tipos/${newData.ID}`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteClienteTipo(id) {
  return deleteRecord(`${endpoint}/tipos/${id}`)
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
    const tipos = yield call(getClienteTipos, record.CLICOD);
    const saldos = yield call(getClienteSaldos, record.CLICOD);
    yield put({
      type: types.GET_CLIENTE_SUCCESS,
      payload: { record, tipos, saldos },
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
    yield put({
      type: types.GET_CLIENTES_REQUEST,
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
    const record = yield call(updateCliente, action.id, action.newData);
    yield put({
      type: types.UPDATE_CLIENTE_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_CLIENTES_REQUEST,
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
    yield put({
      type: types.GET_CLIENTES_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_CLIENTE_FAILED,
      payload: error.message,
    });
  }
}

function* addClienteTipoSaga(action) {
  try {
    const record = yield call(addClienteTipo, action.newData);
    yield put({
      type: types.ADD_CLIENTE_TIPO_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_CLIENTES_REQUEST,
    });
    const state = yield select();
    const { record: cliente } = state.clientes;
    yield put({
      type: types.GET_CLIENTE_REQUEST,
      id: cliente.CLICOD,
    });
  } catch (error) {
    yield put({
      type: types.ADD_CLIENTE_TIPO_FAILED,
      payload: error.message,
    });
  }
}

function* fetchClienteTipoSaga(action) {
  try {
    const tipo = yield call(getClienteTipo, action.id);
    yield put({
      type: types.GET_CLIENTE_TIPO_SUCCESS,
      payload: tipo,
    });
  } catch (error) {
    yield put({
      type: types.GET_CLIENTE_TIPO_FAILED,
      payload: error.message,
    });
  }
}

function* updateClienteTipoSaga(action) {
  try {
    const record = yield call(updateClienteTipo, action.newData);
    yield put({
      type: types.UPDATE_CLIENTE_TIPO_SUCCESS,
      payload: record,
    });
    const state = yield select();
    const { record: cliente } = state.clientes;
    yield put({
      type: types.GET_CLIENTE_REQUEST,
      id: cliente.CLICOD,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_CLIENTE_TIPO_FAILED,
      payload: error.message,
    });
  }
}

function* deleteClienteTipoSaga(action) {
  try {
    const record = yield call(deleteClienteTipo, action.id);

    yield put({
      type: types.DELETE_CLIENTE_TIPO_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_CLIENTES_REQUEST,
    });
    const state = yield select();
    const { record: cliente } = state.clientes;
    yield put({
      type: types.GET_CLIENTE_REQUEST,
      id: cliente.CLICOD,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_CLIENTE_TIPO_FAILED,
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
  yield takeEvery(types.ADD_CLIENTE_TIPO_REQUEST, addClienteTipoSaga);
  yield takeEvery(types.GET_CLIENTE_TIPO_REQUEST, fetchClienteTipoSaga);
  yield takeEvery(types.UPDATE_CLIENTE_TIPO_REQUEST, updateClienteTipoSaga);
  yield takeEvery(types.DELETE_CLIENTE_TIPO_REQUEST, deleteClienteTipoSaga);
}

export default clientesSaga;
