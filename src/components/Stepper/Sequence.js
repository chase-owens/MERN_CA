import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import StepperIcon from '../Stepper/StepperIcon';

import { theme } from '../../styles/theme';
import { isMobile } from 'react-device-detect';

const Sequence = ({ steps }) => {
  return (
    <div style={{ width: '100%' }}>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{ width: '83%', margin: 'auto' }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              width:
                i < steps.length - 1
                  ? isMobile
                    ? `calc(20% + 60px)`
                    : `calc(20% + 45px)`
                  : isMobile
                  ? 70
                  : 30
            }}
          >
            <Grid container alignItems='center' wrap='nowrap'>
              <Grid
                item
                style={{
                  width: isMobile ? 70 : 30,
                  height: isMobile ? 70 : 30,
                  borderRadius: '50%',
                  background: theme.palette.ternary.main
                }}
              >
                <StepperIcon content={step.icon} />
              </Grid>
              {i < steps.length - 1 && (
                <Grid item style={{ width: '40%', margin: '0 15px' }}>
                  <hr
                    style={{
                      width: '100%'
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </div>
        ))}
      </Grid>
      <Grid
        container
        justify='center'
        // alignItems='center'
        style={{ width: '90%', margin: 'auto', paddingTop: 15 }}
      >
        {steps.map((step, i) => (
          <Grid
            key={i}
            item
            style={{
              width: '27%',
              margin: i === 1 ? '0 15px' : 0
            }}
          >
            <Typography
              variant='body2'
              align='center'
              style={{ fontSize: isMobile ? '2em' : null }}
            >
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sequence;
