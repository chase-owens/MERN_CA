import { defaultState } from '../../server/defaultState.js';
import { CHANGE_LANGUAGE } from './language.actions';

export const changeLanguage = (state = defaultState.language, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { language: action.language };
    default:
      return state;
  }
};
