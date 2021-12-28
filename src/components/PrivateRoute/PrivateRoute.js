import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  authenticated: state.authState.authenticated,
});

const PrivateRoute = ({ component, path, authenticated }) => {
  return (
    <Route
      exact
      path={path}
      render={() => (authenticated ? component : <Redirect to="/" />)}
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
