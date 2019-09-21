import * as appActions from './app.actions';

describe('actions', () => {
  it('should authenticate return an action wit type AUTHENTICATE ', () => {
    const expectedAction = {
      type: appActions.AUTHENTICATE
    };
    expect(appActions.authenticateUser()).toEqual(expectedAction);
  });
});
