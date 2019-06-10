import React from 'react';
import { theme } from '../../styles/theme';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Translation from '../Translation/Translation';

const Solution = () => {
  const color = useMediaQuery(theme.breakpoints.down(740))
    ? 'textSecondary'
    : 'default';
  return (
    <div
      style={{
        padding: '0 40px',
        background: useMediaQuery(theme.breakpoints.down(740))
          ? theme.palette.ternary.main
          : '#fff'
      }}
    >
      <div style={{ padding: '20px 0 60px 10px' }}>
        <Typography
          style={{ paddingBottom: 10 }}
          color={color}
          paragraph
          variant='caption'
        >
          <span style={{ fontWeight: 'bold' }}>CA</span> / Solution
        </Typography>
        <Typography
          style={{ fontSize: '2em' }}
          color={color}
          paragraph
          variant='h2'
        >
          Scientific approach to establishing calm behaviors
        </Typography>
        <hr
          style={{
            borderColor: useMediaQuery(theme.breakpoints.down(740))
              ? theme.palette.secondary.dark
              : theme.palette.ternary.main,
            marginBottom: 15
          }}
        />
        <Typography color={color} variant='headline'>
          We applied state-of-the-art learning science to the development of
          Constructional Affection. We identified a range of target outcomes
          that if present are solutions for the problem of canine hyperactivity.
          We identified a pattern of behavior that is a member of both excited
          and calm behaviors and build upon that foundation to shape and
          maintain the calm behaviors. The result is a spoiled companion that
          now finds being calm more reinforcing than getting excited.
        </Typography>
      </div>
      <Translation />
    </div>
  );
};

export default withWidth({ withTheme: true })(Solution);
