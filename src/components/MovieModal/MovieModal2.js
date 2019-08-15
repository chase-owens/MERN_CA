import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Pace from 'react-pace-progress';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import MovieModal from './MovieModal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMovie } from '../Videos/videos.action';

import { theme } from 'styles/theme';
import { isMobile } from 'react-device-detect';

const mapStateToProps = state => ({
  focusedVideo: state.videoState.video
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMovie }, dispatch);

const MovieModal2 = ({ focusedVideo, toggleMovie }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return isLoading ? (
    <Pace color={theme.palette.primary.main} />
  ) : (
    <MovieModal />
  );
};

export default withWidth({ withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieModal2)
);
