import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import ivaReducer from "./iva";
import conceptosReducer from "./conceptos";
import clientesReducer from "./clientes";
import ajustesReducer from "./ajustes";
import tiposReducer from "./tipos";
import subtiposReducer from "./subtipos";
import vendedoresReducer from "./vendedores";
import porcivaReducer from "./porciva";
import pagosReducer from "./pagos";
import numerosReducer from "./numeros";
import remitosReducer from "./remitos";
import productosReducer from "./productos";
import provinciasReducer from "./provincias";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  iva: ivaReducer,
  conceptos: conceptosReducer,
  clientes: clientesReducer,
  ajustes: ajustesReducer,
  tipos: tiposReducer,
  subtipos: subtiposReducer,
  vendedores: vendedoresReducer,
  porciva: porcivaReducer,
  pagos: pagosReducer,
  numeros: numerosReducer,
  remitos: remitosReducer,
  productos: productosReducer,
  provincias: provinciasReducer,
});

export default rootReducer;
