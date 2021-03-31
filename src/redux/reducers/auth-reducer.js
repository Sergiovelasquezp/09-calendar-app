import { AUTH_ACTIONS } from '../action-types/action-types';

const { AUTH_START_LOGIN, AUTH_FINISH_CHECKING, AUTH_ON_LOGOUT } = AUTH_ACTIONS;

const initialState = {
  checking: true,
};

export const AUTH_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START_LOGIN:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case AUTH_FINISH_CHECKING:
      return {
        ...state,
        checking: false,
      };
    case AUTH_ON_LOGOUT:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
