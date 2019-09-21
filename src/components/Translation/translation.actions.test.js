import * as translationActions from './translation.actions';

describe('actions', () => {
  it('should return action with type CHANGE_AUDIENCE and audience == input', () => {
    const audience = 'me';
    const expectedAction = {
      type: translationActions.CHANGE_AUDIENCE,
      audience: audience
    };
    expect(translationActions.changeAudience(audience)).toEqual(expectedAction);
  });
});
