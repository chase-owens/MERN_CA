import React from 'react';
import { connect } from 'react-redux';
import { theme } from '../../styles/theme';

import Matricies from '../Matricies/Matricies';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Translation from '../Translation/Translation';

const mapStateToProps = state => ({
  audience: state.audienceState.audience
});

const Solution = ({ audience }) => {
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
            marginBottom: 10
          }}
        />
        <Typography
          style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
          color={color}
          variant='body1'
        >
          We applied state-of-the-art learning science to the development of
          Constructional Affection. We identified a range of target outcomes
          that if present are solutions for the problem of canine hyperactivity.
          We identified a pattern of behavior that is a member of both excited
          and calm behaviors and build upon that foundation to shape and
          maintain the calm behaviors. The result is a spoiled companion that
          now finds being calm more reinforcing than getting excited.
        </Typography>
        {audience === 'ba' && <Matricies />}
        <Translation />
        <br />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(
  withWidth({ withTheme: true })(Solution)
);
