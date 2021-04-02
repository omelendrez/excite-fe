import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import ivaSaga from "./ivaSaga";
import conceptosSaga from "./conceptosSaga";
import clientesSaga from "./clientesSaga";
import ajustesSaga from "./ajustesSaga";
import tiposSaga from "./tiposSaga";
import subtiposSaga from "./subtiposSaga";
import vendedoresSaga from "./vendedoresSaga";
import porcivaSaga from "./porcivaSaga";
import pagosSaga from "./pagosSaga";
import numerosSaga from "./numerosSaga";

export default function* rootSaga() {
  yield all([
    transportesSaga(),
    ivaSaga(),
    conceptosSaga(),
    clientesSaga(),
    ajustesSaga(),
    tiposSaga(), 
    subtiposSaga(), 
    vendedoresSaga(), 
    porcivaSaga(),
    pagosSaga(),
    numerosSaga(), 
  ]);
