import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import vendedoresReducer from "./vendedores";
import porcivaReducer from "./porciva";
import pagosReducer from "./pagos";
import numerosReducer from "./numeros";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  vendedores: vendedoresReducer,
  porciva: porcivaReducer,
  pagos: pagosReducer,
  numeros: numerosReducer
});

export default rootReducer;
