import moment from 'moment';
import { CALENDAR_ACTIONS } from '../action-types/action-types';

const initialState = {
  events: [
    {
      title: 'Birthday',
      user: {
        id: 12345,
        name: 'Darth Vader',
      },
      start: moment().toDate(),
      end: moment().add(2, 'hour').toDate(),
      background: '#fafafa',
    },
  ],
  activeEvent: null,
};
export const CALENDAR_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR_ACTIONS.CALENDAR_NEW_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case CALENDAR_ACTIONS.CALENDAR_ACTIVE_EVENT:
      return {
        ...state,
        activeEvent: action.payload,
      };
    default:
      return state;
  }
};
