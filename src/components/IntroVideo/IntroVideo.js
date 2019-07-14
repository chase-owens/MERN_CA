import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { isMobile } from 'react-device-detect';

const MEDIA_URL = 'http://dpx1ioq3tyc5t.cloudfront.net/intro.mp4';

const IntroVideo = ({ theme }) => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(MEDIA_URL);
    // player.play();
  });

  const iframe = <iframe src={url} width='100%' />;
  // const player = new playerjs.Player(iframe);

  return isMobile ? (
    // <ReactPlayer
    //   style={{
    //     marginTop: 0,
    //     padding: 0
    //   }}
    //   url={url}
    //   playing
    //   volume={0}
    //   muted
    //   loop
    //   width='100%'
    //   height='100%'
    // />
    iframe
  ) : (
    <article
      style={{
        width: '100%',
        height: '100%',

        overflow: 'hidden'
      }}
    >
      {/* <ReactPlayer
        style={{
          marginTop: 0,
          padding: 0,
          minWidth: 740,
          marginLeft: !useMediaQuery(theme.breakpoints.up(740)) ? 0 : -80
        }}
        url={url}
        playing
        volume={0}
        muted
        loop
        width='100%'
        height='100%'
      /> */}
      {iframe}
    </article>
  );
};

export default withWidth({ withTheme: true })(IntroVideo);
