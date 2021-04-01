import { all } from "redux-saga/effects";
import transportesSaga from "./transportesSaga";
import ivaSaga from "./ivaSaga";

export default function* rootSaga() {
  yield all([transportesSaga(), ivaSaga()]);
}
