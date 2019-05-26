import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleSidebar } from './nav.actions';
import NavButtons from '../NavButtons/NavButtons';
import NavDropdown from '../NavDropdown/NavDropdown';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const title = 'Constructional Affection';

const mapStateToProps = state => {
  console.log(state);
  return {
    language: state.languageState.language,
    open: state.sideBarState.open
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar }, dispatch);

const Nav = ({ theme, toggleSidebar, language, open }) => {
  console.log(language, open);
  return (
    <div style={{ background: 'transparent' }}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <h1>{title}</h1>
        </Grid>
        <Grid item>
          {!open ? (
            <Grid container justify='flex-end'>
              {!useMediaQuery(theme.breakpoints.up('md')) ? (
                <Icon onClick={toggleSidebar}>
                  <i class='material-icons'>menu</i>
                </Icon>
              ) : (
                <NavButtons />
              )}
            </Grid>
          ) : (
            <Grid container justify='flex-end'>
              {!useMediaQuery(theme.breakpoints.up('md')) ? (
                <ClickAwayListener onClickAway={toggleSidebar}>
                  <Icon onClick={toggleSidebar}>
                    <i class='material-icons'>menu</i>
                  </Icon>
                </ClickAwayListener>
              ) : (
                <NavButtons />
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
      <NavDropdown />
    </div>
  );
};

export default withWidth({ withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
