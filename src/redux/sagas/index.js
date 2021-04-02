import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import ivaSaga from "./ivaSaga";
import conceptosSaga from "./conceptosSaga";
import clientesSaga from "./clientesSaga";
import ajustesSaga from "./ajustesSaga";

export default function* rootSaga() {
  yield all([
    transportesSaga(),
    ivaSaga(),
    conceptosSaga(),
    clientesSaga(),
    ajustesSaga(),
  ]);
}
