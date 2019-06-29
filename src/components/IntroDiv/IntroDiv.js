import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';

import IntroVideo from '../IntroVideo/IntroVideo';

import { isMobile } from 'react-device-detect';

const mapStateToProps = state => ({
  language: state.languageState.language,
  open: state.sideBarState.open
});

const styles = theme => ({
  title: {
    fontSize: '2.6em'
  },
  introDiv: {
    [theme.breakpoints.down('sm')]: {
      bottom: -230
    },
    [theme.breakpoints.up('sm')]: {
      bottom: -180
    }
  }
});

const IntroDiv = ({ theme, classes, open }) => {
  return isMobile ? (
    <div style={{ width: '100vw' }}>
      <Grid
        container
        direction='row'
        style={{
          position: 'relative',
          marginBottom: 280,
          width: '100%'
        }}
      >
        <Grid
          item
          style={{
            transition: 'all .18s ease-in-out',
            width: '100%',
            margin: 0
          }}
        >
          <IntroVideo />
        </Grid>
        <Grid
          item
          style={{
            width: '88%',
            margin: 'auto',
            padding: '50px 30px 0 50px',
            position: 'absolute',
            background: `${theme.palette.primary.main}`,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5
          }}
          className={classes.introDiv}
        >
          <Typography variant={'h2'} className={classes.title}>
            Constructional Affection
          </Typography>
          <Typography
            variant='body1'
            style={{ paddingTop: 25, paddingBottom: 60 }}
          >
            Establish desired interactions using affection as a reinforcer.
          </Typography>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div>
      <Grid
        container
        direction='row'
        style={{
          position: 'relative',
          marginBottom: !useMediaQuery(theme.breakpoints.up(740)) ? 280 : null
        }}
      >
        <Grid
          item
          style={{
            transition: 'all .18s ease-in-out',
            width: !useMediaQuery(theme.breakpoints.up(740)) ? '100%' : '55%',
            margin: !useMediaQuery(theme.breakpoints.up(740))
              ? 0
              : '70px 0 130px 0'
          }}
        >
          <IntroVideo />
        </Grid>
        <Grid
          item
          style={{
            width: !useMediaQuery(theme.breakpoints.up(740)) ? '88%' : '45%',
            margin: 'auto',
            padding: '50px 30px 0 50px',
            position: !useMediaQuery(theme.breakpoints.up(740))
              ? 'absolute'
              : 'static',
            background: `${theme.palette.primary.main}`,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5
          }}
          className={classes.introDiv}
        >
          <Typography variant={'h2'} className={classes.title}>
            Constructional Affection
          </Typography>
          <Typography
            variant='body1'
            style={{ paddingTop: 25, paddingBottom: 60 }}
          >
            Establish desired interactions using affection as a reinforcer.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(
  withWidth({ withTheme: true })(connect(mapStateToProps)(IntroDiv))
);
