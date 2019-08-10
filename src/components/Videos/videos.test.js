import React from 'react';
import Videos from './Videos';
import { shallow } from 'enzyme';

describe('Videos', () => {
  it('renders without crashing', () => {
    const videos = shallow(<Videos />);
    expect(videos).toMatchSnapshot();
  });
});
