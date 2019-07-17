import React, { Component } from 'react';

const MEDIA_URL = 'http://dpx1ioq3tyc5t.cloudfront.net/intro.mp4';

class HeroVideo extends Component {
  componentDidMount() {
    const videoContainer = <div style={{ width: '100%', height: '100%' }} />;

    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.setAttribute('playsinline', 'true');

    const source = document.createElement('source');
    source.src = MEDIA_URL;
    source.type = 'video/mp4';
    video.appendChild(source);

    videoContainer.appendChild(video);
  }

  render() {
    return videoContainer;
  }
}

export default HeroVideo;
