import React, { Fragment } from 'react';
import navButtons from '../Nav/navOptions.config';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

const NavButtons = ({ direction }) => {
  return (
    <Grid
      container
      direction={direction}
      justify='space-between'
      style={{ width: '100%', margin: direction === 'column' ? 40 : null }}
    >
      {navButtons.map(button => (
        <Grid item key={button.title}>
          <Link
            style={{ textDecoration: 'none', margin: '0 5px' }}
            to={button.location}
          >
            <Button
              style={{
                color: direction === 'column' ? theme.palette.text.light : null
              }}
            >
              {button.title}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default withTheme()(NavButtons);
