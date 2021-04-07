import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords, getRecordById } from "../../services";

function getClientes() {
  return getRecords("clientes")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getCliente(id) {
  return getRecordById("clientes", id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchClientes() {
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

function* fetchCliente(action) {
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

function* clientesSaga() {
  yield takeEvery(types.GET_CLIENTES_REQUEST, fetchClientes);
  yield takeEvery(types.GET_CLIENTE_REQUEST, fetchCliente);
}

export default clientesSaga;
