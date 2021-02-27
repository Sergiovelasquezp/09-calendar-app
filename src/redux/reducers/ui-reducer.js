import { UI_ACTIONS } from '../action-types/action-types';
const initialState = {
  modalOpen: false,
};

export const UI_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case UI_ACTIONS.UI_OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case UI_ACTIONS.UI_CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};
