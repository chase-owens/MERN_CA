import React from 'react';
import ContactNav from './ContactNav';
import { shallow } from 'enzyme';

describe('ContactNav', () => {
  it('renders without crashing', () => {
    const contactNav = shallow(<ContactNav />);
    expect(contactNav).toMatchSnapshot();
  });
});
