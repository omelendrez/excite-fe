import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import tiposSaga from "./tiposSaga";
import subtiposSaga from "./subtiposSaga";

export default function* rootSaga() {
  yield all([transportesSaga(), tiposSaga(), subtiposSaga()]);
}
