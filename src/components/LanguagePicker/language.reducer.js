import { CHANGE_LANGUAGE } from './language.actions';
import { defaultState } from '../../server/defaultState.js';

export const changeLanguage = (state = defaultState.language, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { language: action.language };
    default:
      return state;
  }
};
