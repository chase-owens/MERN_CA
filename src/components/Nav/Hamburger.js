import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSidebar } from '../Nav/nav.actions';

import withWidth from '@material-ui/core/withWidth';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

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
        <Button
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            zIndex: 999,
            top: 15,
            right: 15
          }}
        >
          <div>
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
        </Button>
      )}
      {open && (
        <ClickAwayListener onClickAway={toggleSidebar}>
          <Button
            style={{
              color: '#fff',
              zIndex: 999,
              marginRight: 24,
              marginTop: -3
            }}
            onClick={toggleSidebar}
          >
            <Icon
              style={{
                paddingBottom: 15,
                paddingTop: -15,
                paddingRight: 20,
                marginRight: -12,
                marginLeft: -5
              }}
            >
              <i style={{ fontSize: 40 }} class='material-icons'>
                close
              </i>
            </Icon>
          </Button>
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
