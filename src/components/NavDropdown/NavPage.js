import React from 'react';
import { connect } from 'react-redux';
import NavButtons from '../NavButtons/NavButtons.js';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';

import { theme } from '../../styles/theme';

const mapStateToProps = state => ({
  language: state.languageState.language,
  open: state.sideBarState.open
});

const NavDropdown = ({ language, open, theme }) => {
  console.log(open);
  return (
    <Slide
      in={open}
      direction='left'
      style={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: open ? 500 : 5,
        transition: 'all .18s ease-in-out'
      }}
    >
      <div
        style={{
          background: theme.palette.ternary.main
        }}
      >
        {open && <NavButtons direction='column' />}
      </div>
    </Slide>
  );
};

export default withWidth({ withTheme: true })(
  connect(mapStateToProps)(NavDropdown)
);
