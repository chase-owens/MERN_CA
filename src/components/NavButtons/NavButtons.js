import React, { Fragment } from 'react';
import navButtons from '../Nav/navOptions.config';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { isMobile } from 'react-device-detect';

const NavButtons = ({ direction }) => {
  return (
    <Grid
      container
      direction={direction}
      justify='space-between'
      style={{
        width: direction === 'column' ? '80%' : '100%',
        margin: direction === 'column' ? 'auto' : null,
        marginTop: direction === 'column' ? 125 : null
      }}
    >
      {navButtons.map(button => (
        <Grid item key={button.title}>
          <Link
            style={{
              textDecoration: 'none'
            }}
            to={button.location}
          >
            <Button
              style={{
                color: direction === 'column' ? theme.palette.text.light : null,
                fontSize: direction === 'column' ? '2.5em' : null,
                display: 'block',
                margin: 'auto'
              }}
            >
              {button.title}
            </Button>
          </Link>
          {direction === 'column' && <Divider />}
        </Grid>
      ))}
    </Grid>
  );
};

export default withTheme()(NavButtons);
