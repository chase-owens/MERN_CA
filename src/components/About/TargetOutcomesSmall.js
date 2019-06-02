import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepperIcon from '../Stepper/StepperIcon';

import { theme } from '../../styles/theme';

const TargetOutcomesSmall = ({ title, steps }) => {
  return (
    <div>
      <Typography
        style={{ padding: '40px 0 30px 0' }}
        align='center'
        variant='title'
      >
        {title}
      </Typography>
      <Stepper alternativeLabel>
        {steps.map((step, i) => (
          <Step completed={true} key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{ width: '80%', margin: 'auto' }}
      >
        <Grid
          item
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: theme.palette.ternary.main
          }}
          justify='center'
        >
          <StepperIcon content={'A'} />
        </Grid>
        <Grid item style={{ width: '20%', margin: '0 15px' }}>
          <hr
            style={{
              width: '100%'
            }}
          />
        </Grid>
        <Grid
          item
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: theme.palette.ternary.main
          }}
          justify='center'
        >
          <StepperIcon content={'B'} />
        </Grid>
        <Grid item style={{ width: '20%', margin: '0 15px' }}>
          <hr
            style={{
              width: '100%'
            }}
          />
        </Grid>
        <Grid
          item
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: theme.palette.ternary.main
          }}
          justify='center'
        >
          <StepperIcon content={'C'} />
        </Grid>
      </Grid>
      <Grid
        container
        justify='space-between'
        alignItems='center'
        style={{ width: '90%', margin: 'auto', marginTop: 18 }}
      >
        <Grid item style={{ width: '31%' }}>
          <Typography align='center'>P</Typography>
        </Grid>
        <Grid item style={{ width: '31%' }}>
          <Typography align='center'>P</Typography>
        </Grid>
        <Grid item style={{ width: '31%' }}>
          <Typography align='center'>P</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TargetOutcomesSmall;
