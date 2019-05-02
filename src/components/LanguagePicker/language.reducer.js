import { CHANGE_LANGUAGE } from './language.actions';

const defaultState = {
  language: 'en'
};

export const changeLanguage = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
};
