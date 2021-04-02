import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import { getRecords } from "../../services";

function getProductos() {
  return getRecords("productos")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchProductos() {
  try {
    const records = yield call(getProductos);
    yield put({
      type: types.GET_PRODUCTOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_PRODUCTOS_FAILED,
      payload: error.message,
    });
  }
}

function* productosSaga() {
  yield takeEvery(types.GET_PRODUCTOS_REQUEST, fetchProductos);
}

export default productosSaga;
