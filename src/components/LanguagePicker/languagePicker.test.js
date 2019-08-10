import React from 'react';
import LanguagePicker from './LanguagePicker';
import { shallow } from 'enzyme';
import { store } from '../../app/store';
import { Provider } from 'react-redux';

describe('LanguagePicker', () => {
  it('renders without crashing', () => {
    const languagePicker = shallow(
      <Provider store={store}>
        <LanguagePicker />
      </Provider>
    );
    expect(languagePicker).toMatchSnapshot();
  });
});
