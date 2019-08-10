import React from 'react';
import NavIntro from './NavIntro';
import { shallow } from 'enzyme';

describe('NavIntro', () => {
  it('renders without crashing', () => {
    const navIntro = shallow(<NavIntro />);
    expect(navIntro).toMatchSnapshot();
  });
});
