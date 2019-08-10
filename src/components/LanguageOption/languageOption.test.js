import React from 'react';
import LanguageOption from './LanguageOption';
import { shallow } from 'enzyme';

describe('LanguageOption', () => {
  it('renders without crashing', () => {
    const languageOption = shallow(<LanguageOption />);
    expect(languageOption).toMatchSnapshot();
  });
});
