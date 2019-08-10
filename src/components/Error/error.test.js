import React from 'react';
import Error from './Error';
import { shallow } from 'enzyme';

describe('Error', () => {
  it('renders without crashing', () => {
    const error = shallow(<Error />);
    expect(error).toMatchSnapshot();
  });
});
