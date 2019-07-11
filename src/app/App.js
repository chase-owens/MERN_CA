import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import YourProgram from '../components/YourProgram/YourProgram';

import { getDataFromServer } from '../server/httpRequests';
import Footer from '../components/Footer/Footer';
import Main from '../components/Layout/Main';
import Contact from '../components/Layout/Contact';

const mapStateToProps = state => {
  return {
    open: state.sideBarState.open
  };
};
class App extends Component {
  state = {
    hasError: false
  };
  componentDidMount() {
    getDataFromServer();
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    logErrorToMyService(err, info);
  }

  render() {
    return this.state.hasError ? (
      <Fragment>
        <Error />
      </Fragment>
    ) : (
      <Fragment>
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/contact' render={() => <Contact />} />

        <Route exact path='/program' render={() => <Main />} />
        <Footer />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
