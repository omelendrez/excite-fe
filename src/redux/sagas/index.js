import { all } from 'redux-saga/effects';
import transportesSaga from './transportesSaga';

export default function* rootSaga() {
  yield all([
    transportesSaga(),
  ]);
}