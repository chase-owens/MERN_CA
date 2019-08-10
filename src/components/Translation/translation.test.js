import React from 'react';
import Translation from './Translation';
import { shallow } from 'enzyme';

describe('Translation', () => {
  it('renders without crashing', () => {
    const translation = shallow(<Translation />);
    expect(translation).toMatchSnapshot();
  });
});
