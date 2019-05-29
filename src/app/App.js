import React, { Fragment, Component } from 'react';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import NavIntro from '../components/Layout/NavIntro';
import LanguagePicker from '../components/LanguagePicker/LanguagePicker';
import About from '../components/About/About';

import Grid from '@material-ui/core/Grid';

import { Route } from 'react-router-dom';
import YourProgram from '../components/YourProgram/YourProgram';
import { getDataFromServer } from '../server/httpRequests';

class App extends Component {
  componentDidMount() {
    getDataFromServer();
  }

  render() {
    const { theme } = this.props;

    return (
      <Fragment>
        <NavIntro />

        <main>
          <About />
          <LanguagePicker />
          <Route exact path='/program' render={() => <YourProgram />} />
        </main>
      </Fragment>
    );
  }
}

export default App;
