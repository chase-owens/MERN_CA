import * as videosActions from './videos.action';

describe('actions', () => {
  it('should return action with type TOGGLE_MOVIE and video == input', () => {
    const movie = 'Boondock Saints';
    const expectedAction = {
      type: videosActions.TOGGLE_MOVIE,
      video: movie
    };
    expect(videosActions.toggleMovie(movie)).toEqual(expectedAction);
  });
});
