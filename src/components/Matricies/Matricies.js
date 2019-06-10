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
    <div>
      <Typography
        style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
        color={color}
        variant='body1'
      >
        For calm behavior to be the alternative of choice it must be met with
        more benefits or less costs than other available alternatives or must
        have lower behavioral requirements.
      </Typography>
      <Grid container spacing={8} justify='space-around'>
        {twoXtwo.map(matrix => (
          <Grid item>
            <Matrix matrix={matrix} />
          </Grid>
        ))}
      </Grid>
      <Typography
        style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
        color={color}
        variant='body1'
      >
        If the dog has an extensive history of hyperactivity, simply arranging
        the consequences to favor calm behavior might not be enough. In these
        cases, a history of being reinforced for calm behaviors is required to
        help the dog feel the difference between conditions.
      </Typography>
    </div>
  );
};

export default withWidth({ withTheme: true })(Matricies);
