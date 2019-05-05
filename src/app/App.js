import React, { Fragment, Component } from 'react';
import Nav from '../components/Nav/Nav';
import IntroDiv from '../components/IntroDiv/IntroDiv';
import NavDropdown from '../components/NavDropdown/NavDropdown';
import LanguagePicker from '../components/LanguagePicker/LanguagePicker';
import Grid from '@material-ui/core/Grid';
import { Route } from 'react-router-dom';
import YourProgram from '../components/YourProgram/YourProgram';
import { getDataFromServer } from '../server/httpRequests';

class App extends Component {
  componentDidMount() {
    getDataFromServer();
  }

  render() {
    return (
      <Fragment>
        <nav style={{ width: '100%', height: 45 }}>
          <Nav />
        </nav>
        <Grid container justify='flex-end'>
          <NavDropdown />
        </Grid>

        <main>
          <IntroDiv />
          <LanguagePicker />
          <Route exact path='/program' render={() => <YourProgram />} />
        </main>
      </Fragment>
    );
  }
}

export default App;
