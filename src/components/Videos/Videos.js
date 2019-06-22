import React from 'react';
import { theme } from '../../styles/theme';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import videos from './videos.config';
import { toggleMovie } from './videos.action';

import VideoCard from '../VideoCard/VideoCard';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMovie }, dispatch);

const Videos = () => {
  return (
    <div style={{ padding: 40, margin: 'auto', overflow: 'hidden' }}>
      <Typography paragraph variant='caption'>
        <span style={{ fontWeight: 'bold' }}>CA</span> / Videos
      </Typography>
      <Typography style={{ fontSize: '2em' }} paragraph variant='headline'>
        Videos
      </Typography>
      <Grid container spacing={40} justify='flex-start'>
        {videos.map(video => (
          <Grid
            item
            style={{
              width: useMediaQuery(theme.breakpoints.down('sm'))
                ? '50%'
                : '33.3%'
            }}
          >
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const toggleSkin = url => {
  console.log(url);
};

export default withWidth({ withTheme: true })(
  connect(mapDispatchToProps)(Videos)
);
