import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import vendedoresReducer from "./vendedores";
import porcivaReducer from "./porciva";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  vendedores: vendedoresReducer,
  porciva: porcivaReducer,
});

export default rootReducer;
