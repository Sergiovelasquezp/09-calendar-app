import { CALENDAR_ACTIONS } from '../action-types/action-types';

export const calendarCurrentEvent = (calendarEvent) => ({
  type: CALENDAR_ACTIONS.CALENDAR_ACTIVE_EVENT,
  payload: calendarEvent,
});
export const calendarNewEvent = (calendarEvent) => ({
  type: CALENDAR_ACTIONS.CALENDAR_NEW_EVENT,
  payload: calendarEvent,
});
export const calendarUpdateEvent = (calendarEvent) => ({
  type: CALENDAR_ACTIONS.CALENDAR_UPDATE_EVENT,
  payload: calendarEvent,
});
export const calendarClearActiveEvent = () => ({
  type: CALENDAR_ACTIONS.CALENDAR_CLEAR_ACTIVE_EVENT,
});
export const calendarDeleteEvent = () => ({
  type: CALENDAR_ACTIONS.CALENDAR_DELETE_EVENT,
});
