import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from './Main';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles/theme';

import NavIntro from './NavIntro';
import About from '../About/About';
import Solution from '../Solution/Solution';
import HowTo from '../HowTo/HowTo';
import Videos from '../Videos/Videos';
import MovieModal from '../MovieModal/MovieModal';
import Footer from '../Footer/Footer';
import '../../mocks/matchMediaMock';
// import jsdom from 'jsdom';
// const { JSDOM } = jsdom;
// const doc = new JSDOM(`<!doctype html><html><body></body></html>`);
// global.document = doc;
// global.window = doc.defaultView;

describe('Main', () => {
  it('it did not change visually', () => {
    const main = shallow(<Main />);
    expect(main).toMatchSnapshot();
  });

  // it('renders expected children', () => {
  //   const main = mount(
  //     <Provider store={store}>
  //       <MuiThemeProvider theme={theme}>
  //         <Main />
  //       </MuiThemeProvider>
  //     </Provider>
  //   );
  //   expect(main.find(NavIntro).length).toEqual(1);
  //   expect(main.find(About).length).toEqual(1);
  //   expect(main.find(Solution).length).toEqual(1);
  //   expect(main.find(HowTo).length).toEqual(1);
  //   expect(main.find(Videos).length).toEqual(1);
  //   expect(main.find(MovieModal).length).toEqual(1);
  //   expect(main.find(Footer).length).toEqual(1);
  // });
});
