import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "redux/actions";
import { getRecords } from "services";

const endpoint = "wake-up";

function wakeUp() {
  return getRecords(endpoint)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* wakeUpSaga() {
  try {
    const response = yield call(wakeUp);
    yield put({
      type: types.WAKE_UP_SUCCESS,
      payload: response,
    });
    yield put({
      type: types.GET_PRODUCTOS_REQUEST,
    });
    yield put({
      type: types.GET_TIPOS_REQUEST,
    });
    yield put({
      type: types.GET_SUBTIPOS_REQUEST,
    });
    yield put({
      type: types.GET_CLIENTES_REQUEST,
    });
    yield put({
      type: types.GET_VENDEDORES_REQUEST,
    });
    yield put({
      type: types.GET_TRANSPORTES_REQUEST,
    });
    yield put({
      type: types.GET_PROVINCIAS_REQUEST,
    });
    yield put({
      type: types.GET_REMITOS_REQUEST,
    });
    yield put({
      type: types.GET_CONCEPTOS_REQUEST,
    });
    yield put({
      type: types.GET_AJUSTES_REQUEST,
    });
    yield put({
      type: types.GET_PAGOS_REQUEST,
    });
    yield put({
      type: types.GET_NUMEROS_REQUEST,
    });
    yield put({
      type: types.GET_ESTADOS_REQUEST,
    });
    yield put({
      type: types.GET_IVAS_REQUEST,
    });
    yield put({
      type: types.GET_PORCIVA_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.WAKE_UP_FAILED,
      payload: error,
    });
    console.log(error);
  }
}

function* wakeUpSagas() {
  yield takeEvery(types.WAKE_UP_REQUEST, wakeUpSaga);
}

export default wakeUpSagas;
