import React from 'react';
import VideoCard from './VideoCard';
import { shallow } from 'enzyme';

describe('VideoCard', () => {
  it('renders without crashing', () => {
    const videoCard = shallow(<VideoCard />);
    expect(videoCard).toMatchSnapshot();
  });
});
