import React from 'react';
import { connect } from 'react-redux';
import NavButtons from '../NavButtons/NavButtons.js';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';

import { theme } from '../../styles/theme';

import { isMobile } from 'react-device-detect';

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
        width: '100%',
        height: '100%',
        zIndex: open ? 500 : 5,
        transition: 'all .18s ease-in-out'
      }}
    >
      <div
        style={{
          background: { open }
            ? `linear-gradient(90deg, 'translucent' 2%, ${
                theme.palette.ternary.main
              } 2%)`
            : theme.palette.ternary.main
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
