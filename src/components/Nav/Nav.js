import React from 'react';
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleSidebar }, dispatch);
};

const mapStateToProps = state => {
  return state;
};

const Nav = ({ theme, toggleSidebar, language }) => {
  return (
    <AppBar>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <p>{title}</p>
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
    </AppBar>
  );
};

export default withWidth({ withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
