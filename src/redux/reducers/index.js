import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import tiposReducer from "./tipos";
import subtiposReducer from "./subtipos";
import vendedoresReducer from "./vendedores";
import porcivaReducer from "./porciva";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  tipos: tiposReducer,
  subtipos: subtiposReducer,
  vendedores: vendedoresReducer,
  porciva: porcivaReducer,
});



export default rootReducer;
