import React from 'react';
import Solution from './Solution';
import { shallow } from 'enzyme';
import { store } from '../../app/store';
import { Provider } from 'react-redux';

describe('Solution', () => {
  it('renders without crashing', () => {
    const solution = shallow(
      <Provider store={store}>
        <Solution />
      </Provider>
    );
    expect(solution).toMatchSnapshot();
  });
});
