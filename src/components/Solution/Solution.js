import React from 'react';
import { connect } from 'react-redux';
import { theme } from '../../styles/theme';

import Matricies from '../Matricies/Matricies';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Translation from '../Translation/Translation';
import { isMobile } from 'react-device-detect';

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
        background: useMediaQuery(theme.breakpoints.down(740))
          ? theme.palette.ternary.main
          : '#fff'
      }}
    >
      <div style={{ paddingTop: 20 }}>
        <div style={{ padding: '0 40px' }}>
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
        </div>
        <div style={{ padding: '0 40px' }}>
          <Translation />
        </div>

        {audience === 'gen' ? (
          <div style={{ padding: '0 40px' }}>
            <Typography
              style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
              color={color}
              variant='body1'
            >
              We applied state-of-the-art learning science to the development of
              Constructional Affection. Since approaching for affection is a
              member of both excited and calm behaviors, Constructional
              Affection builds upon that foundation to shape and maintain calm
              behaviors. The result is a spoiled companion that now finds being
              calm more reinforcing than getting excited.
            </Typography>
          </div>
        ) : audience === 'ba' ? (
          <div>
            <div style={{ padding: '0 40px' }}>
              <Typography
                style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
                color={color}
                variant='body1'
              >
                We followed the Constructional Approach (Goldiamond, 1974) in
                the development of Constructional Affection. We first identified
                target outcomes by asking what behaviors under what conditions
                make up calm interactions. After making explicit the target
                outcomes we turned to identifying current relevant repertoires
                and other assets. Since approaching for affection is a member of
                both excited and calm behaviors and because it was the
                consequence specified in the target outcome, affection was
                selected as the reinforcer. Approaching, sitting, and lying down
                are responses aready in the repertoire, and all are good
                candidates as entry repertoire. Approaching for affection is
                then necessary. Response shaping is used to shape sitting or
                lying down. Stimulus fading is used to maintain sitting or lying
                down under the stimulus conditions defined by the target
                objective. Then, if the target objective specifies consequences
                other than petting and scratching, those consequences are
                provided contingent upon the occurrence of the occasion-behavior
                relation declared in the objective.
              </Typography>
            </div>
            <Matricies />
          </div>
        ) : (
          <div style={{ padding: '0 40px' }}>
            <Typography
              style={{
                padding: '20px 0 40px 0',
                fontSize: '1.2em',
                overflow: 'hidden'
              }}
              color={color}
              variant='body1'
            >
              Woof woof. Grrrrr ruff ruff. Bark wiggle yawn bark, bark, bark.
              Woof woof. Grrrrr ruff ruff. Bark, bark-bark-bark, bark-bark-bark,
              bark-bark-bark. Grrrrr ruff ruff. Grrrrr ruff-ruff-ruff-sruff.
            </Typography>
          </div>
        )}

        <br />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(
  withWidth({ withTheme: true })(Solution)
);
