import React from 'react';
import navOptions from '../Nav/navOptions.config';
import { connect } from 'react-redux';
import { toggleSidebar } from '../Nav/nav.actions';
import { bindActionCreators } from 'redux';
import { withTheme } from '@material-ui/core/styles';

import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  open: state.sideBarState.open,
  language: state.language
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar }, dispatch);

const NavDropdown = ({ language, toggleSidebar, open }) => {
  return (
    <Popper open={open} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          id='menu-list-grow'
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom'
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={toggleSidebar}>
              <MenuList>
                {navOptions.map(option => (
                  <Link to={option.location}>
                    <MenuItem key={option.title} onClick={toggleSidebar}>
                      {option.title}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
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
