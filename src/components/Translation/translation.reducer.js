import { defaultState } from '../../server/defaultState.js';
import { CHANGE_AUDIENCE } from './translation.actions';

export const audienceReducer = (state = defaultState.audience, action) => {
  switch (action.type) {
    case CHANGE_AUDIENCE:
      return { audience: action.audience };
    default:
      return state;
  }
};
