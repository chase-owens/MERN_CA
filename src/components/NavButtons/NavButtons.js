import React, { Fragment } from 'react';
import navButtons from '../Nav/navOptions.config';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

const NavButtons = () => {
  return (
    <Grid
      container
      display='row'
      justify='space-between'
      style={{ width: '100%' }}
    >
      {navButtons.map(button => (
        <Grid item>
          <Link
            style={{ textDecoration: 'none', margin: '0 5px' }}
            key={button.title}
            to={button.location}
          >
            <Button>{button.title}</Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default withTheme()(NavButtons);
