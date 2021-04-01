import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import ivaReducer from "./iva";
import conceptosReducer from "./conceptos";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  iva: ivaReducer,
  conceptos: conceptosReducer,
});

export default rootReducer;
