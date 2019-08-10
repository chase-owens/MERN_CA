import React from 'react';
import Chip from './Chip';
import { shallow } from 'enzyme';
import { store } from '../../app/store';
import { Provider } from 'react-redux';

describe('Chip', () => {
  it('renders without crashing', () => {
    const chip = shallow(
      <Provider store={store}>
        <Chip />
      </Provider>
    );
    expect(chip).toMatchSnapshot();
  });
});
