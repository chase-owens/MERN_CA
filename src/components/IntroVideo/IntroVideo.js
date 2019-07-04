import React from 'react';
import ReactPlayer from 'react-player';
import API from 'utils/uiAPI';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
// import { Storage } from 'aws-amplify';

import { isMobile } from 'react-device-detect';

const getVideo = () => {
  API.get('/movie')
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};

const IntroVideo = ({ theme }) => {
  return isMobile ? (
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
          padding: 0
        }}
        // url={introVideo}
        // url='http://s3.amazonaws.com/constructionalaffection/intro.mp4'
        // url={getVideo}
        url='http://dpx1ioq3tyc5t.cloudfront.net/intro.mp4'
        playing
        volume={0}
        muted
        loop
        width='100%'
        height='100%'
      />
    </article>
  ) : (
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
        // url='http://s3.amazonaws.com/constructionalaffection/intro.mp4'
        // url='https://constructionalaffection.s3.ca-central-1.amazonaws.com/intro.mp4'
        // url='http://constructionalaffection.ca-central-1.amazonaws.com/intro.mp4'
        // url={getVideo}
        url='http://dpx1ioq3tyc5t.cloudfront.net/intro.mp4'
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
