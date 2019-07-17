import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { isMobile } from 'react-device-detect';

const MEDIA_URL = 'http://dpx1ioq3tyc5t.cloudfront.net/intro.mp4';

const IntroVideo = ({ theme }) => {
  const [muted, setMuted] = useState(true);
  const [autoplay, setAutoplay] = useState(null);
  const [loop, setLoop] = useState(null);

  useEffect(() => {
    setMuted(true);
    setAutoplay(true);
    setLoop(true);
  }, []);

  const iframe = (
    <video
      src={MEDIA_URL}
      width='100%'
      defaultMuted
      muted={muted}
      autoPlay={autoplay}
      loop={loop}
      playsinline
    />
  );
  // const player = new playerjs.Player(iframe);

  return isMobile ? (
    <ReactPlayer
      style={{
        marginTop: 0,
        padding: 0
      }}
      url={MEDIA_URL}
      playing
      volume={0}
      muted
      loop
      width='100%'
      height='100%'
      playsinline
    />
  ) : (
    <div
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
        url={MEDIA_URL}
        playing
        volume={0}
        muted={muted}
        loop
        width='100%'
        height='100%'
        playsinline
      />
      {/* <div dangerouslySetInnerHTML={playsinline} /> */}
    </div>
  );
};

export default withWidth({ withTheme: true })(IntroVideo);
