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
      <div style={{ padding: '20px 0 60px 0' }}>
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
        <Translation style={{ paddingLeft: 40 }} />
        {audience === 'gen' ? (
          <div style={{ padding: '0 40px' }}>
            <Typography
              style={{ padding: '20px 0 40px 0', fontSize: '1.2em' }}
              color={color}
              variant='body1'
            >
              We applied state-of-the-art learning science to the development of
              Constructional Affection. We identified target outcomes that if
              present are solutions for the problem excited behaviors create. We
              identified a pattern of behavior that is a member of all excited
              and calm behaviors and build upon that foundation to shape and
              maintain the calm behaviors. The result is a spoiled companion
              that now finds being calm more reinforcing than getting excited.
            </Typography>
          </div>
        ) : audience === 'ba' ? (
          <div>
            <div style={{ padding: '0 40px' }}>
              <Typography
                style={{ padding: '20px 40px 40px 40px', fontSize: '1.2em' }}
                color={color}
                variant='body1'
              >
                We followed the Constructional Approach (Goldiamond, 1974) in
                the development of Constructional Affection. We identified
                target outcomes that if present are solutions for the problem
                excited behaviors create. Approaching for affection as a
                reinforcer is the entry repertoire. Response shaping is used to
                establish sitting or lying down. Stimulus fading is used to
                maintain sitting or lying down under the stimulus conditions
                defined by the target objective. Then, if the target objective
                requires consequences other than petting and scratching, those
                consequences are provided contingent upon the occurrence of the
                occasion-behavior relation defined by the target outcome.
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
              Woof woof. Grrrrr ruff ruff. Bark, bark, bark, bark, bark, bark,
              bark, bark, bark, bark. Grrrrr ruff ruff. Grrrrr ruff ruff ruff
              ruff.
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
