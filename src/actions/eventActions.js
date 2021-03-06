import * as types from './actionTypes';
import EventApi from '../api/fetchEventApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadEvents(startDate, endDate, genreId) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return EventApi.getAllEvents(startDate, endDate, genreId).then(events => {
      dispatch(loadEventsSuccess(events));
    }).catch(error => {
      throw(error);
    });
  };
}

