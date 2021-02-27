import { CALENDAR_ACTIONS } from '../action-types/action-types';

export const calendarCurrentEvent = (calendarEvent) => ({
  type: CALENDAR_ACTIONS.CALENDAR_ACTIVE_EVENT,
  payload: calendarEvent,
});
export const calendarNewEvent = (calendarEvent) => ({
  type: CALENDAR_ACTIONS.CALENDAR_NEW_EVENT,
  payload: calendarEvent,
});
