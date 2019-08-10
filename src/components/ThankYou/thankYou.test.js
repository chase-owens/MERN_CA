import React from 'react';
import ThankYou from './ThankYou';
import { shallow } from 'enzyme';

describe('ThankYou', () => {
  it('renders without crashing', () => {
    const thankYou = shallow(<ThankYou />);
    expect(thankYou).toMatchSnapshot();
  });
});
