import React from 'react';
import StepperIcon from './StepperIcon';
import { shallow } from 'enzyme';

describe('StepperIcon', () => {
  it('renders without crashing', () => {
    const stepperIcon = shallow(<StepperIcon />);
    expect(stepperIcon).toMatchSnapshot();
  });
});
