import { defaultState } from '../server/defaultState';
import { AUTHENTICATE } from './app.actions';

export const appReducer = (state = defaultState.auth, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { authenticated: true };
    default:
      return state;
  }
};
