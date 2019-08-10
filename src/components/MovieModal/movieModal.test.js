import React from 'react';
import MovieModal from './MovieModal';
import { shallow } from 'enzyme';

describe('MovieModal', () => {
  it('renders without crashing', () => {
    const movieModal = shallow(<MovieModal />);
    expect(movieModal).toMatchSnapshot();
  });
});
