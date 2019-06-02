import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleSidebar } from './nav.actions';
import NavButtons from '../NavButtons/NavButtons';
import NavDropdown from '../NavDropdown/NavDropdown';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { theme } from '../../styles/theme';

const title = 'Constructional Affection';

const mapStateToProps = state => {
  console.log(state);
  return {
    language: state.languageState.language,
    open: state.sideBarState.open
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar }, dispatch);

const Nav = ({ theme, toggleSidebar, language, open }) => {
  console.log(language, open);
  return (
    <div style={{ background: 'transparent', width: '95%', margin: 'auto' }}>
      <Grid
        container
        justify='space-between'
        alignItems='center'
        style={{ height: { open } ? 60 : 100, lineHeight: 50 }}
      >
        <Grid item>
          <Typography variant='headline'>{title}</Typography>
        </Grid>
        <Grid item>
          {useMediaQuery(theme.breakpoints.up('md')) && <NavButtons direction='row' />}
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth({ withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
