import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../types";
import {
  addRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} from "../../services";

const endpoint = "remitos";

function getRemitos() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getRemito(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getItem(id) {
  return getRecordById(`${endpoint}/items/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getItems(id) {
  return getRecordById(`${endpoint}/${id}/items`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteRemito(id) {
  return deleteRecord(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addItem(newData) {
  return addRecord(`${endpoint}/items`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updateItem(newData) {
  return updateRecord(`${endpoint}/items`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deleteItem(id) {
  return deleteRecord(`${endpoint}/items/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchRemitosSaga() {
  try {
    const records = yield call(getRemitos);
    yield put({
      type: types.GET_REMITOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_REMITOS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchRemitoSaga(action) {
  try {
    const record = yield call(getRemito, action.id);
    yield put({
      type: types.GET_REMITO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_REMITO_FAILED,
      payload: error.message,
    });
  }
}

function* fetchItemsSaga(action) {
  try {
    const record = yield call(getItems, action.id);
    yield put({
      type: types.GET_ITEMS_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_ITEMS_FAILED,
      payload: error.message,
    });
  }
}

function* fetchItemSaga(action) {
  try {
    const record = yield call(getItem, action.id);
    yield put({
      type: types.GET_ITEM_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_ITEM_FAILED,
      payload: error.message,
    });
  }
}

function* deleteRemitoSaga(action) {
  try {
    const record = yield call(deleteRemito, action.id);
    yield put({
      type: types.DELETE_REMITO_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.REMITOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_REMITO_FAILED,
      payload: error.message,
    });
  }
}

function* addItemSaga(action) {
  try {
    const record = yield call(addItem, action.newData);
    yield put({
      type: types.ADD_ITEM_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.REMITOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.ADD_ITEM_FAILED,
      payload: error.message,
    });
  }
}

function* updateItemSaga(action) {
  try {
    const record = yield call(updateItem, action.newData);
    yield put({
      type: types.UPDATE_ITEM_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.REMITOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ITEM_FAILED,
      payload: error.message,
    });
  }
}

function* deleteItemSaga(action) {
  try {
    const record = yield call(deleteItem, action.id);
    yield put({
      type: types.DELETE_ITEM_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.REMITOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_ITEM_FAILED,
      payload: error.message,
    });
  }
}

function* remitosSaga() {
  yield takeEvery(types.GET_REMITOS_REQUEST, fetchRemitosSaga);
  yield takeEvery(types.GET_REMITO_REQUEST, fetchRemitoSaga);
  yield takeEvery(types.GET_ITEMS_REQUEST, fetchItemsSaga);
  yield takeEvery(types.GET_ITEM_REQUEST, fetchItemSaga);
  yield takeEvery(types.DELETE_REMITO_REQUEST, deleteRemitoSaga);
  yield takeEvery(types.ADD_ITEM_REQUEST, addItemSaga);
  yield takeEvery(types.UPDATE_ITEM_REQUEST, updateItemSaga);
  yield takeEvery(types.DELETE_ITEM_REQUEST, deleteItemSaga);
}

export default remitosSaga;
