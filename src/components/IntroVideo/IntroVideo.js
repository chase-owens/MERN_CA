import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { isMobile } from 'react-device-detect';

const MEDIA_URL = 'http://dpx1ioq3tyc5t.cloudfront.net/intro.mp4';

const IntroVideo = ({ theme }) => {
  const [muted, setMuted] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [loop, setLoop] = useState(true);
  const [url, setUrl] = useState(MEDIA_URL);

  useEffect(() => {
    setMuted(true);
    setAutoplay(true);
    setLoop(true);
    setUrl(MEDIA_URL);
  }, []);

  const iframe = (
    <video
      width='100%'
      autoPlay={autoplay}
      // muted={muted}
      muted
      playsInline
      loop={loop}
    >
      <source src={url} />
    </video>
  );

  return isMobile ? (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {iframe}
    </div>
  ) : (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {iframe}
    </div>
  );
};

export default withWidth({ withTheme: true })(IntroVideo);
