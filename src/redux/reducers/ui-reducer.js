import { UI_ACTIONS } from '../action-types/action-types';
const initialState = {
  modalOpen: false,
};

export const UI_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case UI_ACTIONS:
      return {
        ...state,
        modalOpen: true,
      };
    default:
      return state;
  }
};
