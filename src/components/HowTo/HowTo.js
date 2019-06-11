import React from 'react';
import { theme } from '../../styles/theme';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InteractionGuidelines from '../InteractionGuidelines/InteractionGuidelines';
import AffectionLoop from '../AffectionLoop/AffectionLoop';

const HowTo = () => {
  const color = useMediaQuery(theme.breakpoints.down(740))
    ? 'default'
    : 'textSecondary';
  const background = useMediaQuery(theme.breakpoints.down(740))
    ? '#fff'
    : theme.palette.ternary.main;
  return (
    <div style={{ background: background }}>
      <div id='how-to' style={{ padding: '10px 30px 60px 40px' }}>
        <Typography paragraph variant='caption'>
          <span style={{ fontWeight: 'bold' }}>CA</span> / How To
        </Typography>
        <Typography
          style={{ fontSize: '2em' }}
          color={color}
          paragraph
          variant='h2'
        >
          Getting Started
        </Typography>
        <Grid container spacing={16} justify='space-around'>
          <Grid item>
            <InteractionGuidelines />
          </Grid>

          <Grid item>
            <AffectionLoop />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withWidth({ withTheme: true })(HowTo);
