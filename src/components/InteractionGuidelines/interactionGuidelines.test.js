import React from 'react';
import InteractionGuidelines from './InteractionGuidelines';
import { shallow } from 'enzyme';

describe('InteractionGuidelines', () => {
  it('renders without crashing', () => {
    const interactionGuidelines = shallow(<InteractionGuidelines />);
    expect(interactionGuidelines).toMatchSnapshot();
  });
});
