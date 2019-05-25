import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSidebar } from './nav.actions';
import NavButtons from '../NavButtons/NavButtons';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const title = 'Constructional Affection';

const mapStateToProps = state => {
  language: state.languageState.language;
};

const Nav = ({ theme, toggleSidebar, language }) => {
  return (
    <div style={{ background: 'transparent' }}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <h1>{title}</h1>
        </Grid>
        <Grid item>
          <Grid container justify='flex-end'>
            {!useMediaQuery(theme.breakpoints.up('md')) ? (
              <Icon onClick={toggleSidebar}>
                <i class='material-icons'>menu</i>
              </Icon>
            ) : (
              <NavButtons />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth({ withTheme: true })(connect(mapStateToProps)(Nav));
