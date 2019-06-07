import {combineReducers} from 'redux';
import events from './eventReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  events,
  ajaxCallsInProgress
});

export default rootReducer;
