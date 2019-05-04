import { TOGGLE_SIDEBAR } from './nav.actions';
import { defaultState } from '../../server/defaultState';

export const toggleOptions = (state = defaultState.open, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};
