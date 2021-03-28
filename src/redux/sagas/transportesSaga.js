import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../types';
import { getRecords } from '../../services';

function getTransportes() {
  return getRecords('transportes')
    .then(response => response)
    .catch(error => { throw error; });
};

function* fetchTransportes() {
  try {
    const records = yield call(getTransportes);
    yield put({
      type: types.GET_TRANSPORTES_SUCCESS,
      payload: records
    });
  } catch (error) {
    yield put({
      type: types.GET_TRANSPORTES_FAILED,
      payload: error.message
    });
  }
}

function* transportesSaga() {
  yield takeLatest(types.GET_TRANSPORTES_REQUEST, fetchTransportes);
}

export default transportesSaga;