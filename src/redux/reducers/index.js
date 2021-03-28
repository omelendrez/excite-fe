import { combineReducers } from 'redux';
import transportesReducer from './transportes';

const rootReducer = combineReducers({
  transportes: transportesReducer
});

export default rootReducer;