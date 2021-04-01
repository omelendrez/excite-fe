import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import tiposSaga from "./tiposSaga";
import subtiposSaga from "./subtiposSaga";
import vendedoresSaga from "./vendedoresSaga";
import porcivaSaga from "./porcivaSaga";

export default function* rootSaga() {
  yield all([transportesSaga(), tiposSaga(), subtiposSaga(), vendedoresSaga(), porcivaSaga()]);
}
