import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavIntro from '../components/Layout/NavIntro';
import NavPage from '../components/NavDropdown/NavPage';
import About from '../components/About/About';
import YourProgram from '../components/YourProgram/YourProgram';
import HowTo from '../components/HowTo/HowTo';

import Grid from '@material-ui/core/Grid';

import { getDataFromServer } from '../server/httpRequests';
import Solution from '../components/Solution/Solution';

const mapStateToProps = state => {
  return {
    open: state.sideBarState.open
  };
};
class App extends Component {
  componentDidMount() {
    getDataFromServer();
  }

  render() {
    const { theme, open } = this.props;

    return (
      <Fragment>
        <NavIntro />
        {!open && (
          <main
            style={{
              overflow: 'hidden',
              marginTop: 60
            }}
          >
            <About />
            <Solution />
            <HowTo />
            {/* <LanguagePicker /> */}
            <Route exact path='/program' render={() => <YourProgram />} />
          </main>
        )}
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
