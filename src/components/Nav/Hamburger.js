import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSidebar } from '../Nav/nav.actions';

import withWidth from '@material-ui/core/withWidth';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
