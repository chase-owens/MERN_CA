import React, { Fragment, Component } from 'react';
import { Route, ProtectedRoute } from 'react-router-dom';
import { connect } from 'react-redux';
import YourProgram from '../components/YourProgram/YourProgram';

import { getDataFromServer } from '../server/httpRequests';
import Footer from '../components/Footer/Footer';
import Main from '../components/Layout/Main';
import Contact from '../components/Layout/Contact';
import Error from '../components/Error/Error';
import API from 'utils/uiAPI';

const mapStateToProps = state => {
  return {
    open: state.sideBarState.open
  };
};

// const getDataFromServer = () => {
//   API.get('/dataNoAuth')
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// };
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
    console.log(err, info);
  }

  render() {
    console.log('Error', this.state.hasError);
    return this.state.hasError ? (
      <Error />
    ) : (
      <Fragment>
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/contact' render={() => <Contact />} />

        <Route exact path='/program' render={() => <Main />} />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
