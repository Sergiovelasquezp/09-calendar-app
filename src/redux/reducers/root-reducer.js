import { combineReducers } from 'redux';
import { UI_REDUCER } from './ui-reducer';

const rootReducer = combineReducers({
  ui: UI_REDUCER,
});

export default rootReducer;
