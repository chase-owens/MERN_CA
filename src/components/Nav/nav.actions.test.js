import * as navActions from './nav.actions';

describe('actions', () => {
  it('should return an action with type TOGGLE_NAV_MENU', () => {
    const expectedAction = {
      type: navActions.TOGGLE_NAV_MENU
    };
    expect(navActions.toggleSidebar()).toEqual(expectedAction);
  });
});
