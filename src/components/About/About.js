import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { theme } from '../../styles/theme';
import css from './About.css';

import aboutPoints from './about.config';
import targetOutcomes from './targetOutcomes.config';
import AboutCardSmall from './AboutCardSmall';
import TargetOutcomesSmall from './TargetOutcomesSmall';

const getBackground = i => {
  switch (i) {
    case 0:
      return theme.palette.primary.main;
    case 1:
      return theme.palette.ternary.dark;
    case 2:
      return theme.palette.secondary.main;
    default:
      return null;
  }
};

const About = ({ theme }) => {
  console.log(aboutPoints);
  return (
    <div>
      {useMediaQuery(theme.breakpoints.down(740)) && (
        <div>
          <div
            style={{
              margin: '0 30px 60px 40px'
            }}
          >
            <Typography paragraph variant='headline'>
              The plan: Create calm connections with affection, love, and praise
            </Typography>
            <Typography paragraph variant='body1'>
              If your dog is always jumping on you, nipping your hands, or
              biting your clothes to get your attention, don’t worry - That’s a
              good thing! That means your dog loves you, that your affection has
              already been established as a reinforcer, and that you’re ready to
              begin Constructional Affection.{' '}
            </Typography>
          </div>
          <br />
          <Grid
            container
            className='scrollContainer'
            wrap='nowrap'
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
            spacing={40}
          >
            {aboutPoints !== undefined &&
              aboutPoints.map((point, i) => {
                let background = getBackground(i);
                let color = i % 2 == 0 ? 'textPrimary' : 'textSecondary';
                let margin = i % 2 === 1 ? 36 : 0;
                return (
                  <Grid
                    item
                    key={point.title}
                    style={{
                      flexShrink: 0,
                      width: '65%',
                      height: '65vw',
                      minHeight: 450,
                      minWidth: 400
                      // background: background,
                    }}
                  >
                    <Card
                      style={{
                        width: '100%',
                        height: '100%',
                        // minHeight: 400,
                        // minWidth: 400,
                        background: background
                      }}
                    >
                      <AboutCardSmall point={point} color={color} />
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
          <br />
          <Grid
            container
            className='scrollContainer'
            wrap='nowrap'
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
            spacing={40}
          >
            {targetOutcomes !== undefined &&
              targetOutcomes.map(target => (
                <Grid
                  item
                  key={target.title}
                  style={{
                    flexShrink: 0,
                    width: '65%',
                    height: '65vw',
                    minHeight: 400,
                    minWidth: 400
                    // background: background,
                    // marginLeft: margin,
                    // marginRight: margin
                  }}
                >
                  <Card
                    style={{
                      width: '100%',
                      height: '100%'
                      // minHeight: 400,
                      // minWidth: 400,
                      // background: background
                    }}
                  >
                    <TargetOutcomesSmall
                      title={target.title}
                      steps={[target.a, target.b, target.c]}
                    />
                  </Card>
                </Grid>
              ))}
          </Grid>
          <br />
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
              The plan: Create calm connections with affection, love, and praise
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
