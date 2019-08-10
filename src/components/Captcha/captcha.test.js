import React from 'react';
import Captcha from './Captcha';
import { shallow } from 'enzyme';

describe('Captcha', () => {
  it('renders without crashing', () => {
    const captcha = shallow(<Captcha />);
    expect(captcha).toMatchSnapshot();
  });
});
