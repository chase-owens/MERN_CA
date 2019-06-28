import React from 'react';
import ReactPlayer from 'react-player';
// import introVideo from 'videos/intro.mp4';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const IntroVideo = ({ theme }) => {
  return (
    <article
      style={{
        width: '100%',
        height: '100%',

        overflow: 'hidden'
      }}
    >
      <ReactPlayer
        style={{
          marginTop: 0,
          padding: 0,
          minWidth: 740,
          marginLeft: !useMediaQuery(theme.breakpoints.up(740)) ? 0 : -80
        }}
        // url={introVideo}
        url='http://s3.amazonaws.com/constructionalaffection/intro.mp4'
        // url='https://constructionalaffection.s3.ca-central-1.amazonaws.com/intro.mp4'
        playing
        volume={0}
        muted
        loop
        width='100%'
        height='100%'
      />
    </article>
  );
};

export default withWidth({ withTheme: true })(IntroVideo);
