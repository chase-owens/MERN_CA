import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSidebar } from '../Nav/nav.actions';

import withWidth from '@material-ui/core/withWidth';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';

import { theme } from '../../styles/theme';

const mapStateToProps = state => {
  console.log(state);
  return {
    open: state.sideBarState.open
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar }, dispatch);

const Hamburger = ({ open, toggleSidebar }) => {
  return (
    <div>
      {!open && (
        <div
          onClick={toggleSidebar}
          style={{ position: 'fixed', zIndex: 999, top: 20, right: 30 }}
        >
          <hr
            style={{
              width: 30,
              marginBottom: '6px',
              borderColor: theme.palette.ternary.main
            }}
          />
          <hr
            style={{
              width: 30,
              margin: '6px 0',
              borderColor: theme.palette.ternary.main
            }}
          />
          <hr
            style={{
              width: 30,
              marginTop: '6px',
              borderColor: theme.palette.ternary.main
            }}
          />
        </div>
      )}
      {open && (
        <ClickAwayListener onClickAway={toggleSidebar}>
          <Icon
            onClick={toggleSidebar}
            style={{
              color: '#fff',
              position: 'fixed',
              zIndex: 999,
              top: 16,
              right: 28,
              paddingRight: 30,
              paddingBottom: 26
            }}
          >
            <i style={{ fontSize: 40 }} class='material-icons'>
              close
            </i>
          </Icon>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default withWidth({ withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hamburger)
);
