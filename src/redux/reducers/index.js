import { combineReducers } from "redux";
import transportesReducer from "./transportes";
import tiposReducer from "./tipos";
import subtiposReducer from "./subtipos";

const rootReducer = combineReducers({
  transportes: transportesReducer,
  tipos: tiposReducer,
  subtipos: subtiposReducer,
});



export default rootReducer;
