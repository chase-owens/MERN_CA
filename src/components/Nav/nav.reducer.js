import { TOGGLE_SIDEBAR } from './nav.actions';

const defaultState = {
  open: false
};

export const toggleOptions = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};
