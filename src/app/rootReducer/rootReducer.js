import { combineReducers } from 'redux';
import { changeLanguage } from '../../components/LanguagePicker/language.reducer';

export const rootReducer = combineReducers({
  languageState: changeLanguage
});
