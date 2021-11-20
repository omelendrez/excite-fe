import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "redux/actions";
import { getRecordById } from "services";

const endpoint = "facturas";

function getFactura(id) {
  return getRecordById(`${endpoint}/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function getFacturaItems(id) {
  return getRecordById(`${endpoint}/${id}/items`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

function* fetchFacturaSaga(action) {
  try {
    const record = yield call(getFactura, action.id);
    const items = yield call(getFacturaItems, action.id);
    yield put({
      type: types.GET_FACTURA_SUCCESS,
      payload: { record: record[0], items }
    });
  } catch (error) {
    yield put({
      type: types.GET_FACTURA_FAILED,
      payload: error.message,
    });
  }
}

function* facturaSaga() {
  yield takeEvery(types.GET_FACTURA_REQUEST, fetchFacturaSaga);
}

export default facturaSaga;
