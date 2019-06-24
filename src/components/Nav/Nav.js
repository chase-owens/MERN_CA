import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { toggleSidebar } from './nav.actions';
import NavButtons from '../NavButtons/NavButtons';
import NavDropdown from '../NavDropdown/NavDropdown';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { theme } from '../../styles/theme';
import Hamburger from './Hamburger';
import NavPage from '../NavDropdown/NavPage';

const logoPath = require('images/Logo.png');
const title = 'Constructional Affection';

const mapStateToProps = state => {
  return {
    language: state.languageState.language,
    open: state.sideBarState.open,
    audience: state.audienceState.audience
  };
};

const Nav = ({ theme, language, open, audience }) => {
  console.log(language, open, audience);
  return (
    <div style={{ background: 'transparent', width: '100%', margin: 'auto' }}>
      <Grid
        container
        justify='space-between'
        alignItems='center'
        style={{ height: 60, lineHeight: 1 }}
      >
        <Grid item style={{ marginTop: 5, marginLeft: 20 }}>
          <img height={50} src={logoPath} alt='logo' />
        </Grid>
        <Grid item>
          {useMediaQuery(theme.breakpoints.up('md')) ? (
            <NavButtons direction='row' />
          ) : (
            <Hamburger />
          )}
        </Grid>
      </Grid>
      <NavPage />
    </div>
  );
};

export default withWidth({ withTheme: true })(connect(mapStateToProps)(Nav));
