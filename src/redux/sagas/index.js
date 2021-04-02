import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import vendedoresSaga from "./vendedoresSaga";
import porcivaSaga from "./porcivaSaga";
import pagosSaga from "./pagosSaga";
import numerosSaga from "./numerosSaga";

export default function* rootSaga() {
  yield all([transportesSaga(), vendedoresSaga(), porcivaSaga(), pagosSaga(), numerosSaga()]);
}
