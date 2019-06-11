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
        {audience === 'gen' ? (
          <Typography
            style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
            color={color}
            variant='body1'
          >
            We applied state-of-the-art learning science to the development of
            Constructional Affection. We identified target outcomes that if
            present are solutions for the problem excited behaviors create. We
            identified a pattern of behavior that is a member of all excited and
            calm behaviors and build upon that foundation to shape and maintain
            the calm behaviors. The result is a spoiled companion that now finds
            being calm more reinforcing than getting excited.
          </Typography>
        ) : audience === 'ba' ? (
          <div>
            <Typography
              style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
              color={color}
              variant='body1'
            >
              We followed the Constructional Approach (Goldiamond, 1974) in the
              development of Constructional Affection. We identified target
              outcomes that if present are solutions for the problem excited
              behaviors create. Approaching for affection as a reinforcer is the
              entry repertoire. Response shaping is used to establish sitting or
              lying down. Stimulus fading is used to maintain sitting or lying
              down under the stimulus conditions defined by the target
              objective. Then, if the target objective requires consequences
              other than petting and scratching, those consequences are provided
              contingent upon the occurrence of the occasion-behavior relation
              defined by the target outcome.
            </Typography>
            <Matricies />
          </div>
        ) : (
          <Typography
            style={{
              padding: '20px 0 40px 0',
              fontSize: '1.2em',
              overflow: 'hidden'
            }}
            color={color}
            variant='body1'
          >
            Woof woof. Grrrrr ruff ruff. Bark wiggle yawn bark, bark, bark. Woof
            woof. Grrrrr ruff ruff.
          </Typography>
        )}
        <Translation />
        <br />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(
  withWidth({ withTheme: true })(Solution)
);
