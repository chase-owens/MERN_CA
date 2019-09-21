import React, { unstable_Profiler as Profiler } from 'react';
import { Helmet } from 'react-helmet';
import NavIntro from './NavIntro';
import About from '../About/About';
import Solution from '../Solution/Solution';
import HowTo from '../HowTo/HowTo';
const Videos = React.lazy(() => import('../Videos/Videos'));
const MovieModal2 = React.lazy(() => import('../MovieModal/MovieModal'));
import Footer from '../Footer/Footer';
import { isMobile } from 'react-device-detect';

const record = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  console.log(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  );
};

const Main = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Helmet>
        <meta charset='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <title>Constructional Affection</title>
        <meta name='description' content='Constructional Affection' />
      </Helmet>
      <Profiler id='Main' onRender={record}>
        <NavIntro />
        <main style={{ margin: 0, padding: 0 }}>
          <About />
          <Solution />
          <HowTo />
          <React.Suspense fallback={<div />}>
            <Videos />
          </React.Suspense>
          {!isMobile && (
            <React.Suspense fallback={<div />}>
              <MovieModal2 />
            </React.Suspense>
          )}
        </main>
        <Footer />
      </Profiler>
    </div>
  );
};

export default Main;
