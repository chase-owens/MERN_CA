import * as languageActions from './language.actions';

describe('actions', () => {
  it('should return an action with type CHANGE_LANGUAGE and language selected', () => {
    const ENGLISH = 'en';
    const expectedAction = {
      type: languageActions.CHANGE_LANGUAGE,
      language: ENGLISH
    };
    expect(languageActions.changeLanguage(ENGLISH)).toEqual(expectedAction);
  });
});
