import React from 'react';
import { theme } from '../../styles/theme';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Chip from '../Chip/Chip';

const Translation = () => {
  return (
    <div>
      <Typography paragraph variant='subtitle2'>
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
          <Chip value='robo' label='Robot' />
        </Grid>
      </Grid>
    </div>
  );
};

export default Translation;
