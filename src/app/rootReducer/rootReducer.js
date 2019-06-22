import { combineReducers } from 'redux';
import { changeLanguage } from '../../components/LanguagePicker/language.reducer';
import { navReducer } from '../../components/Nav/nav.reducer';
import { audienceReducer } from '../../components/Translation/translation.reducer';
import { videosReducer } from '../../components/Videos/videos.reducer';

export const rootReducer = combineReducers({
  languageState: changeLanguage,
  sideBarState: navReducer,
  audienceState: audienceReducer,
  videoState: videosReducer
});
