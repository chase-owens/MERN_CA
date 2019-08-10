// import 'jsdom-global/register';
import React from 'react';
import Matricies from './Matricies';
import Matrix from '../Matrix/Matrix';
import { shallow, mount } from 'enzyme';
import '../../mocks/matchMediaMock';

describe('Matricies', () => {
  it('renders without crashing', () => {
    const matricies = shallow(<Matricies />);
    expect(matricies).toMatchSnapshot();
  });

  it('renders matrix', () => {
    const matricies = mount(<Matricies />);
    expect(matricies.find(Matrix).length).toEqual(2);
  });
});
