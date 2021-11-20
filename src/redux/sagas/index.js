import { all } from "redux-saga/effects";
import ajustesSaga from "./ajustesSaga";
import clientesSaga from "./clientesSaga";
import conceptosSaga from "./conceptosSaga";
import estadosSaga from "./estadosSaga";
import facturasSaga from "./facturasSaga";
import ivasSaga from "./ivasSaga";
import numerosSaga from "./numerosSaga";
import pagosSaga from "./pagosSaga";
import porcivaSaga from "./porcivaSaga";
import productosSaga from "./productosSaga";
import provinciasSaga from "./provinciasSaga";
import remitosSaga from "./remitosSaga";
import reportesSaga from './reportsSaga'
import subtiposSaga from "./subtiposSaga";
import tiposSaga from "./tiposSaga";
import transportesSaga from "./transportesSaga";
import vendedoresSaga from "./vendedoresSaga";
import wakeUp from "./wakeUp";

export default function* rootSaga() {
  yield all([
    ajustesSaga(),
    clientesSaga(),
    conceptosSaga(),
    estadosSaga(),
    facturasSaga(),
    ivasSaga(),
    numerosSaga(),
    pagosSaga(),
    porcivaSaga(),
    productosSaga(),
    provinciasSaga(),
    remitosSaga(),
    reportesSaga(),
    subtiposSaga(),
    tiposSaga(),
    transportesSaga(),
    vendedoresSaga(),
    wakeUp(),
  ]);
}
