import { combineReducers } from 'redux';
import { CALENDAR_REDUCER } from './calendar-reducer';
import { UI_REDUCER } from './ui-reducer';

const rootReducer = combineReducers({
  ui: UI_REDUCER,
  calendar: CALENDAR_REDUCER,
});

export default rootReducer;
