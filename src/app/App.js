import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { getDataFromServer } from "../server/httpRequests";

import Main from "../components/Layout/Main";
import Contact from "../components/Layout/Contact";
import Error from "../components/Error/Error";
import ThankYou from "../components/ThankYou/ThankYou";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const mapStateToProps = (state) => {
  return {
    open: state.sideBarState.open,
  };
};

class App extends Component {
  state = {
    hasError: false,
  };
  componentDidMount() {
    getDataFromServer();
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    alert(err, info);
  }

  render() {
    return this.state.hasError ? (
      <Error />
    ) : (
      <>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <PrivateRoute path="/thankyou" component={<ThankYou />} />
        <Route exact path="/program" render={() => <Main />} />
      </>
    );
  }
}

export default connect(mapStateToProps)(App);
