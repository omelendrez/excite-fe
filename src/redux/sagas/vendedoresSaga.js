import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getVendedores() {
  return getRecords("vendedores")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchVendedores() {
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

function* vendedoresSaga() {
  yield takeEvery(types.GET_VENDEDORES_REQUEST, fetchVendedores);
}

export default vendedoresSaga;
