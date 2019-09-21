import React from 'react';
import { theme } from '../../styles/theme';
import { isMobile } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '../Chip/Chip';
import { Link } from 'react-router-dom';

const styles = theme => ({
  chip: {
    '& span': {
      fontSize: isMobile && 5
    }
  }
});

const Translation = ({ classes }) => {
  const color = useMediaQuery(theme.breakpoints.down(740))
    ? 'textSecondary'
    : 'default';
  return (
    <div>
      <Typography color={color} paragraph variant='subtitle2'>
        Translation
      </Typography>
      <Grid container spacing={8} direction='row' wrap='wrap'>
        <Grid item>
          <Chip className={classes.chip} value='gen' label='General' />
        </Grid>
        <Grid item>
          <Chip className={classes.chip} value='ba' label='Behavior Analysts' />
        </Grid>
        <Grid item>
          <Chip className={classes.chip} value='robo' label='Canine' />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(withWidth({ withTheme: true })(Translation));
