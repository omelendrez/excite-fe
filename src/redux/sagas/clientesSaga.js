import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getClientes() {
  return getRecords("clientes")
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

function* clientesSaga() {
  yield takeEvery(types.GET_CLIENTES_REQUEST, fetchClientes);
}

export default clientesSaga;
