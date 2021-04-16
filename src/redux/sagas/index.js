import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import ivasSaga from "./ivasSaga";
import conceptosSaga from "./conceptosSaga";
import clientesSaga from "./clientesSaga";
import ajustesSaga from "./ajustesSaga";
import tiposSaga from "./tiposSaga";
import subtiposSaga from "./subtiposSaga";
import vendedoresSaga from "./vendedoresSaga";
import porcivaSaga from "./porcivaSaga";
import pagosSaga from "./pagosSaga";
import numerosSaga from "./numerosSaga";
import remitosSaga from "./remitosSaga";
import productosSaga from "./productosSaga";
import provinciasSaga from "./provinciasSaga";

export default function* rootSaga() {
  yield all([
    transportesSaga(),
    ivasSaga(),
    conceptosSaga(),
    clientesSaga(),
    ajustesSaga(),
    tiposSaga(),
    subtiposSaga(),
    vendedoresSaga(),
    porcivaSaga(),
    pagosSaga(),
    numerosSaga(),
    remitosSaga(),
    productosSaga(),
    provinciasSaga(),
  ]);
}
