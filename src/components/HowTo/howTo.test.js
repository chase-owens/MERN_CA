import React from 'react';
import HowTo from './HowTo';
import { shallow } from 'enzyme';

describe('HowTo', () => {
  it('renders without crashing', () => {
    const howTo = shallow(<HowTo />);
    expect(howTo).toMatchSnapshot();
  });
});
