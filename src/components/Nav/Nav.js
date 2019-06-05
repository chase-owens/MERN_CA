import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

const title = 'Constructional Affection';

const mapStateToProps = state => {
  console.log(state);
  return {
    language: state.languageState.language,
    open: state.sideBarState.open
  };
};

const Nav = ({ theme, language, open }) => {
  console.log(language, open);
  return (
    <div style={{ background: 'transparent', width: '100%', margin: 'auto' }}>
      <Grid
        container
        justify='space-between'
        alignItems='center'
        style={{ height: 60, lineHeight: 50 }}
      >
        <Grid item>
          <Typography style={{ paddingLeft: 15 }} variant='headline'>
            {title}
          </Typography>
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
