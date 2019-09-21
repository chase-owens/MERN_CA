import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { theme } from '../../styles/theme';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import videos from './videos.config';
import VideoCard from '../VideoCard/VideoCard';
import { isMobile, isIOS } from 'react-device-detect';
import VideoCardMobile from '../VideoCard/VideoCardMobile';

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

const mapStateToProps = state => ({
  focusedVideo: state.videoState.video
});

const Videos = ({ classes, focusedVideo }) => {
  const videoPlayer = useRef();
  const [url, setURL] = useState('false');

  function playVideo(path) {
    setURL(path);
    videoPlayer.current.play();
  }

  // return isMobile ? (
  //   <div id='videos' style={{ marginTop: 50 }}>
  //     <Typography
  //       paragraph
  //       variant='caption'
  //       style={{ marginLeft: 100, fontSize: '2em', marginBottom: 45 }}
  //     >
  //       <span style={{ fontWeight: 'bold' }}>CA</span> / Videos
  //     </Typography>
  //     <Typography
  //       style={{ marginLeft: 100, marginBottom: 45, fontSize: '3em' }}
  //       paragraph
  //       variant='headline'
  //     >
  //       Videos
  //     </Typography>
  //     <Grid
  //       container
  //       spacing={0}
  //       justify='space-between'
  //       style={{
  //         width: '100%'
  //       }}
  //     >
  //       {videos.map(video => (
  //         <Grid
  //           item
  //           key={video.title}
  //           style={{
  //             width: 'calc(100vw - 200px)',
  //             margin: 'auto',
  //             marginBottom: 50
  //           }}
  //         >
  //           <VideoCardMobile video={video} />
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </div>
  // ) : (
  return (
    <div
      id='videos'
      style={{ padding: 40, margin: 'auto', overflow: 'hidden' }}
    >
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

export default withStyles(styles)(
  withWidth({ withTheme: true })(
    connect(
      mapStateToProps,
      null
    )(Videos)
  )
);
