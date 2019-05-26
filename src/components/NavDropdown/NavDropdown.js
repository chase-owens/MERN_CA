import React from 'react';
import navOptions from '../Nav/navOptions.config';
import { connect } from 'react-redux';
import { toggleSidebar } from '../Nav/nav.actions';
import { bindActionCreators } from 'redux';
import { withTheme } from '@material-ui/core/styles';

import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    language: state.languageState.language,
    open: state.sideBarState.open
  };
};

const NavDropdown = ({ language, open }) => {
  console.log(language, open);
  return (
    <Popper style={{ width: '100%' }} open={open} transition disablePortal>
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          id='menu-list-grow'
          style={{
            transformOrigin: 'center top'
          }}
        >
          <MenuList>
            <Grid container direction='row' justify='space-around'>
              {navOptions.map(option => (
                <Grid item key={option.title}>
                  <Link style={{ textDecoration: 'none' }} to={option.location}>
                    <MenuItem item>
                      <h4>{option.title}</h4>
                    </MenuItem>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </MenuList>
        </Grow>
      )}
    </Popper>
  );
};

export default withTheme()(connect(mapStateToProps)(NavDropdown));
