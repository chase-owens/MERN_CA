import React, { Fragment, Component } from 'react';
import Nav from '../components/Nav/Nav';
import IntroDiv from '../components/IntroDiv/IntroDiv';
import NavDropdown from '../components/NavDropdown/NavDropdown';
import LanguagePicker from '../components/LanguagePicker/LanguagePicker';
import Grid from '@material-ui/core/Grid';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Route } from 'react-router-dom';
import YourProgram from '../components/YourProgram/YourProgram';
import { getDataFromServer } from '../server/httpRequests';

class App extends Component {
  componentDidMount() {
    getDataFromServer();
  }

  state = {
    open: false
  };

  render() {
    return (
      <Fragment>
        <Fragment
          style={{
            width: '100%',
            height: 60
          }}
        >
          <nav>
            {/* <Nav toggleSidebar={this.toggleSidebar} open={this.state.open} />
            <NavDropdown
              open={this.state.open}
              toggleSidebar={this.toggleSidebar}
            /> */}
          </nav>
        </Fragment>

        <main>
          <IntroDiv />
          <LanguagePicker />
          <Route exact path='/program' render={() => <YourProgram />} />
        </main>
      </Fragment>
    );
  }

  toggleSidebar = () => {
    console.log('State when clicked: ', this.state.open);
    this.setState({ open: !this.state.open }, () =>
      console.log('State after click', this.state.open)
    );
  };

  clickAwayListener = () => {
    console.log('hello');
    !this.state.open && this.setState({ open: false });
  };
}

export default App;
