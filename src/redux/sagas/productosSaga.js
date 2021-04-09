import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import {
  getRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "../../services";

const endpoint = "productos";

function getProductos() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getProducto(id) {
  return getRecordById(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addProducto(newData) {
  return addRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateProducto(newData) {
  return updateRecord(endpoint, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteProducto(id) {
  return deleteRecord(endpoint, id)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchProductosSaga() {
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

function* fetchProductoSaga(action) {
  try {
    const record = yield call(getProducto, action.id);
    yield put({
      type: types.GET_PRODUCTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_PRODUCTO_FAILED,
      payload: error.message,
    });
  }
}

function* addProductoSaga(action) {
  try {
    const record = yield call(addProducto, action.newData);
    yield put({
      type: types.ADD_PRODUCTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.ADD_PRODUCTO_FAILED,
      payload: error.message,
    });
  }
}

function* updateProductoSaga(action) {
  try {
    const record = yield call(updateProducto, action.newData);
    yield put({
      type: types.UPDATE_PRODUCTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_PRODUCTO_FAILED,
      payload: error.message,
    });
  }
}

function* deleteProductoSaga(action) {
  try {
    const record = yield call(deleteProducto, action.id);
    yield put({
      type: types.DELETE_PRODUCTO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_PRODUCTO_FAILED,
      payload: error.message,
    });
  }
}

function* productosSaga() {
  yield takeEvery(types.GET_PRODUCTOS_REQUEST, fetchProductosSaga);
  yield takeEvery(types.GET_PRODUCTO_REQUEST, fetchProductoSaga);
  yield takeEvery(types.ADD_PRODUCTO_REQUEST, addProductoSaga);
  yield takeEvery(types.UPDATE_PRODUCTO_REQUEST, updateProductoSaga);
  yield takeEvery(types.DELETE_PRODUCTO_REQUEST, deleteProductoSaga);
}

export default productosSaga;
