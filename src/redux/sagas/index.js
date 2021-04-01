import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import vendedoresSaga from "./vendedoresSaga";
import porcivaSaga from "./porcivaSaga";

export default function* rootSaga() {
  yield all([transportesSaga(), vendedoresSaga(), porcivaSaga()]);
}
