import React from 'react';
import AffectionLoop from './AffectionLoop';
import { shallow } from 'enzyme';

describe('AffectionLoop', () => {
  it('renders without crashing', () => {
    const affectionLoop = shallow(<AffectionLoop />);
    expect(affectionLoop).toMatchSnapshot();
  });
});
