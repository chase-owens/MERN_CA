import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  it('renders without crashing', () => {
    const nav = shallow(<Nav />);
    expect(nav).toMatchSnapshot();
  });
});
