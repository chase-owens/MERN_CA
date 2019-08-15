import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMovie } from '../Videos/videos.action';

const mapStateToProps = state => ({
  focusedVideo: state.videoState.video
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMovie }, dispatch);

const IosMovieModal = ({ focusedVideo, toggleMovie }) => {
  return (
    <video width='100%' controls>
      <source src={focusedVideo} />
    </video>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IosMovieModal);
