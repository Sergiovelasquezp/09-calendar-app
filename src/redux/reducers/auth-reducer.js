import {AUTH_ACTIONS} from "../action-types/action-types";

const {AUTH_START_LOGIN} = AUTH_ACTIONS

const initialState = {
  checking: true,
};

export const AUTH_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START_LOGIN:
      return {
        ...state,
        checking: false,
        ...action.payload
      }

    default:
      return state;
  }
};
