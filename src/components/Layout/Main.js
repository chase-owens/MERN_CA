import React from 'react';
import NavIntro from './NavIntro';
import About from '../About/About';
import Solution from '../Solution/Solution';
import HowTo from '../HowTo/HowTo';
import Videos from '../Videos/Videos';
import MovieModal from '../MovieModal/MovieModal';
import Footer from '../Footer/Footer';

import { isMobile } from 'react-device-detect';

const Main = () => {
  return (
    <div style={{ margin: 0, padding: 0, marginRight: isMobile ? 20 : 0 }}>
      <NavIntro />
      <main style={{ margin: 0, padding: 0 }}>
        <About />
        <Solution />
        <HowTo />
        <Videos />
        <MovieModal />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
