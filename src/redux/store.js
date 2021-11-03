import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let store;

if (process.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: true })
  )(createStore)(rootReducer);
} else {
  store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
}

sagaMiddleware.run(rootSaga);

export default store;
