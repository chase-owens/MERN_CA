import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { theme } from '../../styles/theme';
import css from './About.css';

import aboutPoints from './about.config';
import AboutCardSmall from './AboutCardSmall';

const About = ({ theme }) => {
  console.log(aboutPoints);
  return (
    <div>
      {useMediaQuery(theme.breakpoints.down(740)) && (
        <div>
          <Typography
            variant='headline'
            style={{
              marginLeft: 40
            }}
          >
            From Hyperactive to Calm
          </Typography>
          <Grid
            container
            className='scrollContainer'
            wrap='nowrap'
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {aboutPoints !== undefined &&
              aboutPoints.map(point => (
                <Grid item style={{ flexShrink: 0, width: 300, height: 400 }}>
                  <AboutCardSmall point={point} />
                </Grid>
              ))}
          </Grid>
        </div>
      )}
      {useMediaQuery(theme.breakpoints.up(740)) && (
        <Grid container direction='row'>
          <Grid item sm='9' lg='6' style={{ padding: '0 10px' }}>
            <Typography
              variant='h2'
              style={{
                marginLeft: 30,
                fontSize: '2.5em'
              }}
            >
              From Hyperactive to Calm
            </Typography>
            <Typography variant='body1'>
              If your dog is always jumping on you, nipping your hands, or
              biting your clothes to get your attention, don’t worry - That’s a
              good thing! That means your dog loves you, that your affection has
              already been established as a reinforcer, and that you’re ready to
              begin Constructional Affection.{' '}
            </Typography>
          </Grid>
          <Grid
            item
            sm='9'
            lg='6'
            style={{ background: theme.palette.ternary.main }}
          >
            <Typography
              variant='h2'
              style={{
                fontSize: '2.5em'
              }}
            >
              Traditional training approaches often fail to solve the problem.
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default withWidth({ withTheme: true })(About);
