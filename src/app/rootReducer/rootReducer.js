import { combineReducers } from 'redux';
import { toggleOptions } from '../../components/Nav/nav.reducer';
import { changeLanguage } from '../../components/LanguagePicker/language.reducer';

export const rootReducer = combineReducers({
  sideBarState: toggleOptions,
  languageState: changeLanguage
});
