import React from 'react';
import MobileMain from './MobileMain';
import { shallow } from 'enzyme';

describe('MobileMain', () => {
  it('renders without crashing', () => {
    const mobilemain = shallow(<MobileMain />);
    expect(mobilemain).toMatchSnapshot();
  });
});
