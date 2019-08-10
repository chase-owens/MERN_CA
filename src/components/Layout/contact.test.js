import React from 'react';
import Contact from './Contact';
import { shallow } from 'enzyme';

describe('Contact', () => {
  it('renders without crashing', () => {
    const contact = shallow(<Contact />);
    expect(contact).toMatchSnapshot();
  });
});
