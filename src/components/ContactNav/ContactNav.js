import React from 'react';
const logoPath = require('images/Logo.png');
import { isMobile } from 'react-device-detect';
import theme from 'styles/theme';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUser } from '../../app/app.actions';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  authorized: state.authState.authenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticateUser }, dispatch);

const ContactNav = ({ authorized }) => {
  console.log('Auth:', authorized);
  return (
    <nav>
      <Grid container justify='space-between'>
        <Grid
          item
          style={{
            marginTop: isMobile ? 25 : 5,
            marginLeft: 20,
            marginRight: isMobile ? 25 : 5
          }}
        >
          <img height={isMobile ? 100 : 50} src={logoPath} alt='logo' />
        </Grid>
        <Grid item style={{ margin: '10px 15px' }}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <Button
              onClick={authorized ? authenticateUser() : null}
              style={{ fontSize: isMobile ? '2.1em' : null }}
            >
              Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactNav);
