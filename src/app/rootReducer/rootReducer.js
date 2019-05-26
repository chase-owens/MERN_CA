import { combineReducers } from 'redux';
import { changeLanguage } from '../../components/LanguagePicker/language.reducer';
import { navReducer } from '../../components/Nav/nav.reducer';

export const rootReducer = combineReducers({
  languageState: changeLanguage,
  navState: navReducer
});
