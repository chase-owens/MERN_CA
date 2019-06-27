import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LanguagePicker from '../components/LanguagePicker/LanguagePicker';

import NavIntro from '../components/Layout/NavIntro';
import About from '../components/About/About';
import YourProgram from '../components/YourProgram/YourProgram';
import HowTo from '../components/HowTo/HowTo';

import { getDataFromServer } from '../server/httpRequests';
import Solution from '../components/Solution/Solution';
import Videos from '../components/Videos/Videos';
import Footer from '../components/Footer/Footer';
import MovieModal from '../components/MovieModal/MovieModal';
import Main from '../components/Layout/Main';
import Contact from '../components/Layout/Contact';

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
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/contact' render={() => <Contact />} />

        <Route exact path='/program' render={() => <YourProgram />} />
        <Footer />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
