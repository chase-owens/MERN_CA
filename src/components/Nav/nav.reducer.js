import { TOGGLE_NAV_MENU } from './nav.actions';
import { defaultState } from '../../server/defaultState';

export const navReducer = (state = defaultState.open, action) => {
  switch (action.type) {
    case TOGGLE_NAV_MENU:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};
