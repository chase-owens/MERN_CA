import React from 'react';
import { theme } from '../../styles/theme';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import twoXtwo from '../Matrix/2x2.config';
import Matrix from '../Matrix/Matrix';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const Matricies = () => {
  const color = useMediaQuery(theme.breakpoints.down(740))
    ? 'textSecondary'
    : 'default';
  return (
    <Grid container spacing={8} justify='space-around'>
      {twoXtwo.map(matrix => (
        <Grid item>
          <Matrix matrix={matrix} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withWidth({ withTheme: true })(Matricies);
