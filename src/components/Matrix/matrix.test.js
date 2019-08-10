import React from 'react';
import Matrix from './Matrix';
import { shallow } from 'enzyme';

describe('Matrix', () => {
  it('renders without crashing', () => {
    const matrix = shallow(<Matrix />);
    expect(matrix).toMatchSnapshot();
  });
});
