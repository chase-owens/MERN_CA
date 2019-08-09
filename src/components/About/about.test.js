import React from 'react';
import About from './About';
import { shallow } from 'enzyme';

describe('About', () => {
  it('renders without crashing', () => {
    const about = shallow(<About />);
    expect(about).toMatchSnapshot();
  });
});
