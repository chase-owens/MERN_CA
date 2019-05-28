import React from 'react';
import Nav from '../Nav/Nav';
import IntroDiv from '../IntroDiv/IntroDiv';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { theme } from '../../styles/theme';

const NavIntro = ({ theme }) => {
  return (
    <div
      style={{
        background: !useMediaQuery(theme.breakpoints.up(740))
          ? '#fff'
          : `linear-gradient(90deg, #fff 40%, ${
              theme.palette.primary.main
            } 40%)`
      }}
    >
      <nav>
        <Nav />
      </nav>
      <IntroDiv />
    </div>
  );
};

export default withWidth({ withTheme: true })(NavIntro);
