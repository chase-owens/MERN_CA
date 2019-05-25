import React from 'react';
import ReactPlayer from 'react-player';
import introVideo from 'videos/intro.mp4';

const IntroVideo = props => {
  return (
    <ReactPlayer
      url={introVideo}
      playing
      volume={0}
      muted
      loop
      width='100%'
      height='100%'
    />
  );
};

export default IntroVideo;
