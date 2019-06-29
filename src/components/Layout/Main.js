import React from 'react';
import NavIntro from './NavIntro';
import About from '../About/About';
import Solution from '../Solution/Solution';
import HowTo from '../HowTo/HowTo';
import Videos from '../Videos/Videos';
import MovieModal from '../MovieModal/MovieModal';

import { isMobile } from 'react-device-detect';

const Main = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <NavIntro />
      <main>
        <About /> {/* Too Wide On Desktop*/}
        <Solution />
        <HowTo /> {/* Too Wide On Desktop*/}
        <Videos />
        <MovieModal />
      </main>
    </div>
  );
};

export default Main;
