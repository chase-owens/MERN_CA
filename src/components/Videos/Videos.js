import React from 'react';
import { theme } from '../../styles/theme';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Videos = () => {
  return (
    <Grid container spacing={40} justify='flex-start'>
      <Grid item>
        <div />
      </Grid>
    </Grid>
  );
};

export default withWidth({ withTheme: true })(Videos);
