import React from 'react';
import { theme } from '../../styles/theme';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import videos from './videos.config';
import VideoCard from '../VideoCard/VideoCard';
import { isMobile } from 'react-device-detect';

const styles = theme => ({
  videoCard: {
    [theme.breakpoints.down(740)]: {
      width: '100%'
    },
    [theme.breakpoints.up(740)]: {
      width: '50%'
    },
    [theme.breakpoints.up('md')]: {
      width: '33.3%'
    }
  }
});

const Videos = ({ classes }) => {
  return isMobile ? (
    <div style={{}}>
      <Typography
        paragraph
        variant='caption'
        style={{ marginLeft: 100, fontSize: '2.1em', marginBottom: 45 }}
      >
        <span style={{ fontWeight: 'bold' }}>CA</span> / Videos
      </Typography>
      <Typography style={{ fontSize: '3em' }} paragraph variant='headline'>
        Videos
      </Typography>
      <Grid
        container
        spacing={0}
        justify='space-between'
        style={{
          width: '100vw'
        }}
      >
        {videos.map(video => (
          <Grid
            item
            key={video.title}
            style={{ width: '90vw', margin: 'auto' }}
          >
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <div style={{ padding: 40, margin: 'auto', overflow: 'hidden' }}>
      <Typography paragraph variant='caption'>
        <span style={{ fontWeight: 'bold' }}>CA</span> / Videos
      </Typography>
      <Typography style={{ fontSize: '2em' }} paragraph variant='headline'>
        Videos
      </Typography>
      <Grid container spacing={40} justify='flex-start'>
        {videos.map(video => (
          <Grid item key={video.title} className={classes.videoCard}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(withWidth({ withTheme: true })(Videos));
