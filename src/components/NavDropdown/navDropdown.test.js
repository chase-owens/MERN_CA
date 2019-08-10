import React from 'react';
import NavDropdown from './NavDropdown';
import { shallow } from 'enzyme';

describe('NavDropdown', () => {
  it('renders without crashing', () => {
    const navDropdown = shallow(<NavDropdown />);
    expect(navDropdown).toMatchSnapshot();
  });
});
