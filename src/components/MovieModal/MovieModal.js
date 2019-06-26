import React from 'react';
import ReactPlayer from 'react-player';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMovie } from '../Videos/videos.action';

const mapStateToProps = state => ({
  focusedVideo: state.videoState.video
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMovie }, dispatch);

const MovieModal = ({ focusedVideo, toggleMovie }) => {
  return (
    focusedVideo !== null && (
      <div
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.7,
          background: '#000'
        }}
      >
        <div
          style={{
            width: '90%',
            height: '90%',
            margin: 'auto',
            marginTop: '5%'
          }}
        >
          <ReactPlayer
            style={{
              marginTop: 0,
              padding: 0,
              minWidth: 740,
              marginLeft: !useMediaQuery(theme.breakpoints.up(740)) ? 0 : -80
            }}
            url={focusedVideo}
            playing
            volume={0}
            muted
            loop
            width='100%'
            height='100%'
          />
        </div>
      </div>
    )
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieModal);
