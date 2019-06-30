import React from 'react';
import { theme } from '../../styles/theme';
import { isMobile } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Chip from '../Chip/Chip';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  chip: {
    '& span': {
      fontSize: 60
    }
  }
});

const Translation = ({ classes }) => {
  const color = useMediaQuery(theme.breakpoints.down(740))
    ? 'textSecondary'
    : 'default';
  return (
    <div>
      <Typography
        style={{ fontSize: isMobile ? '2.1em' : null }}
        color={color}
        paragraph
        variant='subtitle2'
      >
        Translation
      </Typography>
      <Grid container spacing={8} direction='row' wrap='nowrap'>
        <Grid item>
          <Chip value='gen' label='General' />
        </Grid>
        <Grid item>
          <Chip value='ba' label='Behavior Analysts' />
        </Grid>
        <Grid item>
          <Chip value='robo' label='Canine' />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(withWidth({ withTheme: true })(Translation));
