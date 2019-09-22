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
                Constructional Affection is the artifact of following the
                Constructional Approach (Goldiamond, 1974) to create calm
                interactions with dogs. The first step was to define calm
                behaviors and specify under what conditions they would occur.
                Then current relevant repertoire (approaching, sitting, lying
                down) and other assets (affection as a reinforcer) were
                identified. The steps of the program were then defined. The
                first step uses response shaping to expand on the entry
                repertoire and establish calm behaviors. The second step uses
                stimulus fading to maintain calm behaviors under the target
                conditions. Then, if the target objective specifies consequences
                other than petting and scratching, the final step brings the
                target occasion-behavior relation in contact with the target
                consequence.
              </Typography>
            </div>
            {/* <Matricies /> */}
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
