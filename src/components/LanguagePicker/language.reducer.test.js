import { changeLanguage } from './language.reducer';
import { CHANGE_LANGUAGE } from './language.reducer';
import { defaultState } from '../../server/defaultState';

describe('languageReducer', () => {
  it('should return default state ', () => {
    const languageDefaultState = defaultState.language;
    expect(changeLanguage(undefined, {})).toEqual(languageDefaultState);
  });

  it('should return new language when object with CHANGE_LANGUAGE type', () => {
    const newLanguageObject = { type: CHANGE_LANGUAGE, language: 'es' };
    const languageDefaultState = defaultState.language;
    expect(changeLanguage(languageDefaultState, newLanguageObject)).toEqual({
      language: 'es'
    });
  });
});
