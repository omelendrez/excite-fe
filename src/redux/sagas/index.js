import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import tiposSaga from "./tiposSaga";
import subtiposSaga from "./subtiposSaga";
import vendedoresSaga from "./vendedoresSaga";
import porcivaSaga from "./porcivaSaga";
import pagosSaga from "./pagosSaga";
import numerosSaga from "./numerosSaga";

export default function* rootSaga() {
  yield all([transportesSaga(), 
             tiposSaga(), 
             subtiposSaga(), 
             vendedoresSaga(), 
             porcivaSaga(), 
             numerosSaga(), 
             porcivaSaga()]);
}
