import React from 'react';
import IntroDiv from './IntroDiv';
import { shallow } from 'enzyme';

describe('IntroDiv', () => {
  it('renders without crashing', () => {
    const introDiv = shallow(<IntroDiv />);
    expect(introDiv).toMatchSnapshot();
  });
});
