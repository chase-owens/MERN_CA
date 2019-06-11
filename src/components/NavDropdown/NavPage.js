import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import navOptions from '../Nav/navOptions.config';
import NavButtons from '../NavButtons/NavButtons.js';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { withTheme } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

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
      direction='down'
      style={{
        position: 'fixed',
        top: 0,
        width: 'calc(100vw + 20px)',
        height: '100vh',
        zIndex: 500,
        background: theme.palette.ternary.main,
        color: theme.palette.text.light,
        marginLeft: -20,
        transition: 'all .18s ease-in-out',
        visibility: open ? 'visible' : 'hidden'
      }}
    >
      <div style={{ background: theme.palette.ternary.main }}>
        {open && <NavButtons direction='column' />}
      </div>
    </Slide>
  );
};

export default withWidth({ withTheme: true })(
  connect(mapStateToProps)(NavDropdown)
);
