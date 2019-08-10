import React from 'react';
import NavButtons from './NavButtons';
import { shallow } from 'enzyme';

describe('NavButtons', () => {
  it('renders without crashing', () => {
    const navButtons = shallow(<NavButtons />);
    expect(navButtons).toMatchSnapshot();
  });
});
