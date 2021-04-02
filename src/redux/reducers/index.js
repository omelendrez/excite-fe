import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import ivaReducer from "./iva";
import conceptosReducer from "./conceptos";
import clientesReducer from "./clientes";
import ajustesReducer from "./ajustes";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  iva: ivaReducer,
  conceptos: conceptosReducer,
  clientes: clientesReducer,
  ajustes: ajustesReducer,
});

export default rootReducer;
