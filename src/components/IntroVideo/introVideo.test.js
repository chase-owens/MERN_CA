import React from 'react';
import IntroVideo from './IntroVideo';
import { shallow } from 'enzyme';

describe('IntroVideo', () => {
  it('renders without crashing', () => {
    const introVideo = shallow(<IntroVideo />);
    expect(introVideo).toMatchSnapshot();
  });
});
