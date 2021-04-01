import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import ivaReducer from "./iva";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  iva: ivaReducer,
});

export default rootReducer;
