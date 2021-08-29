import { put, takeEvery, call, select } from "redux-saga/effects";
import * as types from "redux/actions";
import {
  addRecord,
  updateRecord,
  deleteRecord,
  getRecords,
  getRecordById,
} from "services";
const endpoint = "pagos";

function getPagos() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getPago(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addPago(newData) {
  return addRecord(`${endpoint}`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deletePago(id) {
  return deleteRecord(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// Pago Remito
function getPendingRemitos(id) {
  return getRecordById(`${endpoint}/${id}/remitos/pending`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getPagosRemitos(id) {
  return getRecordById(`${endpoint}/${id}/remitos`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getPagoRemito(id) {
  return getRecordById(`${endpoint}/remitos/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addPagoRemito(newData) {
  return addRecord(`${endpoint}/remitos`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updatePagoRemito(newData) {
  return updateRecord(`${endpoint}/remitos/${newData.ID}`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deletePagoRemito(record) {
  return deleteRecord(`${endpoint}/remitos/${record.ID}`)
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// Pago Valor
function getPagosValores(id) {
  return getRecordById(`${endpoint}/${id}/valores`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getPagoValor(id) {
  return getRecordById(`${endpoint}/valores/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function addPagoValor(newData) {
  return addRecord(`${endpoint}/valores`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function updatePagoValor(newData) {
  return updateRecord(`${endpoint}/valores/${newData.ID}`, newData)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function deletePagoValor(record) {
  return deleteRecord(`${endpoint}/valores/${record.ID}`)
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function changeRemitoStatus({ totalValores, remitos, REMPAGNUM = 0 }) {
  let total = totalValores;
  remitos.forEach((remito) => {
    if (total >= remito.REMTOT) {
      updateRecord(`remitos/${remito.REMNUM}`, {
        ESTCOD: "Q",
        REMPAGNUM,
      })
        .then((response) => response)
        .catch((error) => {
          console.error(error);
          throw error;
        });
      total = total - remito.REMTOT;
    } else {
      updateRecord(`remitos/${remito.REMNUM}`, {
        ESTCOD: "S",
        REMPAGNUM: 0,
      })
        .then((response) => response)
        .catch((error) => {
          console.error(error);
          throw error;
        });
    }
  });
}

// Pagos
function* fetchPagos() {
  try {
    const records = yield call(getPagos);
    yield put({
      type: types.GET_PAGOS_SUCCESS,
      payload: records,
    });
  } catch (error) {
    yield put({
      type: types.GET_PAGOS_FAILED,
      payload: error.message,
    });
  }
}

// Pago
function* fetchPagoSaga(action) {
  try {
    const record = yield call(getPago, action.id);
    const remitos = yield call(getPagosRemitos, record.PAGNUM);
    const valores = yield call(getPagosValores, record.PAGNUM);
    const pendingRemitos = yield call(getPendingRemitos, record.CLICOD);
    yield put({
      type: types.GET_PAGO_SUCCESS,
      payload: { record, remitos, valores, pendingRemitos },
    });
  } catch (error) {
    yield put({
      type: types.GET_PAGO_FAILED,
      payload: error.message,
    });
  }
}

function* addPagoSaga(action) {
  try {
    const record = yield call(addPago, action.newData);
    yield put({
      type: types.ADD_PAGO_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.ADD_PAGO_FAILED,
      payload: error.message,
    });
  }
}

function* deletePagoSaga(action) {
  try {
    const record = yield call(deletePago, action.id);
    yield put({
      type: types.DELETE_PAGO_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_PAGO_FAILED,
      payload: error.message,
    });
  }
}

// Pago Remito

function* fetchPagoRemitoSaga(action) {
  try {
    const record = yield call(getPagoRemito, action.id);
    yield put({
      type: types.GET_PAGO_REMITO_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_PAGO_REMITO_FAILED,
      payload: error.message,
    });
  }
}

function* addPagoRemitoSaga(action) {
  try {
    const state = yield select();
    const record = yield call(addPagoRemito, action.newData);
    yield put({
      type: types.ADD_PAGO_REMITO_SUCCESS,
      payload: record,
    });
    yield put({
      type: types.GET_PAGO_REQUEST,
      id: state.pagos.record.PAGNUM,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.ADD_PAGO_REMITO_FAILED,
      payload: error.message,
    });
  }
}

function* updatePagoRemitoSaga(action) {
  try {
    const state = yield select();
    const remito = yield call(updatePagoRemito, action.newData);
    yield put({
      type: types.UPDATE_PAGO_REMITO_SUCCESS,
      payload: remito,
    });
    yield put({
      type: types.GET_PAGO_REQUEST,
      id: state.pagos.record.PAGNUM,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_PAGO_REMITO_FAILED,
      payload: error.message,
    });
  }
}

function* deletePagoRemitoSaga(action) {
  try {
    const state = yield select();
    const remito = yield call(deletePagoRemito, action.record);
    yield put({
      type: types.DELETE_PAGO_REMITO_SUCCESS,
      payload: remito,
    });
    yield put({
      type: types.GET_PAGO_REQUEST,
      id: state.pagos.record.PAGNUM,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_PAGO_REMITO_FAILED,
      payload: error.message,
    });
  }
}
// Pago Valor
function* fetchPagoValorSaga(action) {
  try {
    const record = yield call(getPagoValor, action.id);
    yield put({
      type: types.GET_PAGO_VALOR_SUCCESS,
      payload: record,
    });
  } catch (error) {
    yield put({
      type: types.GET_PAGO_VALOR_FAILED,
      payload: error.message,
    });
  }
}

function* addPagoValorSaga(action) {
  try {
    const state = yield select();
    const PAGSEC = !!state.pagos.valores.length
      ? state.pagos.valores[state.pagos.valores.length - 1].PAGSEC + 1
      : 1;
    const newRecord = { ...action.newData, PAGSEC };
    const record = yield call(addPagoValor, newRecord);
    yield put({
      type: types.ADD_PAGO_VALOR_SUCCESS,
      payload: record,
    });
    const totalValores = state.pagos.valores.reduce(
      (acc, cur) => acc + cur.PAGIMP,
      record.PAGIMP || 0
    );
    yield call(changeRemitoStatus, {
      totalValores,
      remitos: state.pagos.remitos,
      REMPAGNUM: state.pagos.record.PAGNUM,
    });

    yield put({
      type: types.GET_PAGO_REQUEST,
      id: state.pagos.record.PAGNUM,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.ADD_PAGO_VALOR_FAILED,
      payload: error.message,
    });
  }
}

function* updatePagoValorSaga(action) {
  try {
    const state = yield select();
    const valor = yield call(updatePagoValor, action.newData);

    yield put({
      type: types.UPDATE_PAGO_VALOR_SUCCESS,
      payload: valor,
    });

    const totalValores = state.pagos.valores
      .filter((record) => record.ID !== valor.ID)
      .reduce((acc, cur) => acc + cur.PAGIMP, valor.PAGIMP || 0);

    yield call(changeRemitoStatus, {
      totalValores,
      remitos: state.pagos.remitos,
      REMPAGNUM: state.pagos.record.PAGNUM,
    });

    yield put({
      type: types.GET_PAGO_REQUEST,
      id: state.pagos.record.PAGNUM,
    });

    yield put({
      type: types.GET_PAGOS_REQUEST,
    });

    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_PAGO_VALOR_FAILED,
      payload: error.message,
    });
  }
}

function* deletePagoValorSaga(action) {
  try {
    const state = yield select();
    const record = yield call(deletePagoValor, action.record);
    yield put({
      type: types.DELETE_PAGO_VALOR_SUCCESS,
      payload: record,
    });
    const totalValores = state.pagos.valores
      .filter((record) => record.ID !== action.record.ID)
      .reduce((acc, cur) => acc + cur.PAGIMP, 0);
    yield call(changeRemitoStatus, {
      totalValores,
      remitos: state.pagos.remitos,
      REMPAGNUM: state.pagos.record.PAGNUM,
    });
    yield put({
      type: types.GET_PAGO_REQUEST,
      id: state.pagos.record.PAGNUM,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.PAGOS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_PAGO_VALOR_FAILED,
      payload: error.message,
    });
  }
}

function* pagosSaga() {
  yield takeEvery(types.GET_PAGOS_REQUEST, fetchPagos);

  yield takeEvery(types.GET_PAGO_REQUEST, fetchPagoSaga);
  yield takeEvery(types.ADD_PAGO_REQUEST, addPagoSaga);
  yield takeEvery(types.DELETE_PAGO_REQUEST, deletePagoSaga);

  yield takeEvery(types.GET_PAGO_REMITO_REQUEST, fetchPagoRemitoSaga);
  yield takeEvery(types.ADD_PAGO_REMITO_REQUEST, addPagoRemitoSaga);
  yield takeEvery(types.UPDATE_PAGO_REMITO_REQUEST, updatePagoRemitoSaga);
  yield takeEvery(types.DELETE_PAGO_REMITO_REQUEST, deletePagoRemitoSaga);

  yield takeEvery(types.GET_PAGO_VALOR_REQUEST, fetchPagoValorSaga);
  yield takeEvery(types.ADD_PAGO_VALOR_REQUEST, addPagoValorSaga);
  yield takeEvery(types.UPDATE_PAGO_VALOR_REQUEST, updatePagoValorSaga);
  yield takeEvery(types.DELETE_PAGO_VALOR_REQUEST, deletePagoValorSaga);
}

export default pagosSaga;
