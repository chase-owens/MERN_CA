import React from 'react';
const logoPath = require('images/Logo.png');

import theme from 'styles/theme';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const ContactNav = () => {
  return (
    <nav>
      <Grid container justify='space-between'>
        <Grid item style={{ marginTop: 5, marginLeft: 20 }}>
          <img height={50} src={logoPath} alt='logo' />
        </Grid>
        <Grid item style={{ margin: '10px 15px' }}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <Button>Home</Button>
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
};

export default ContactNav;
