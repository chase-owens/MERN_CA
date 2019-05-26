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

const mapStateToProps = state => ({
  language: state.languageState.language
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar }, dispatch);

const NavDropdown = ({ open, toggleSidebar, language }) => {
  console.log(language);
  return (
    <Popper style={{ width: '100%' }} open={open} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          id='menu-list-grow'
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom'
          }}
        >
          <MenuList>
            <Grid container direction='row' justify='space-around'>
              {navOptions.map(option => (
                <Grid item key={option.title}>
                  <Link style={{ textDecoration: 'none' }} to={option.location}>
                    <MenuItem item onClick={toggleSidebar}>
                      {option.title}
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

export default withTheme()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavDropdown)
);
