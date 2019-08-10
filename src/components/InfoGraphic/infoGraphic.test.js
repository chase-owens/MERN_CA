import React from 'react';
import InfoGraphic from './InfoGraphic';
import { shallow } from 'enzyme';

describe('InfoGraphic', () => {
  it('renders without crashing', () => {
    const infoGraphic = shallow(<InfoGraphic />);
    expect(infoGraphic).toMatchSnapshot();
  });
});
