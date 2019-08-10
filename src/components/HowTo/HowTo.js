import React, { useRef } from 'react';
import { theme } from '../../styles/theme';
import caSteps from './caSteps.config';
import { isMobile } from 'react-device-detect';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InteractionGuidelines from '../InteractionGuidelines/InteractionGuidelines';
import AffectionLoop from '../AffectionLoop/AffectionLoop';
import InfoGraphic from '../InfoGraphic/InfoGraphic';

const HowTo = () => {
  const howTo = useRef(null);

  return isMobile ? (
    <div id='howTo' ref={howTo} style={{ paddingTop: 20 }}>
      <Typography
        id='howTo'
        paragraph
        variant='caption'
        style={{ marginLeft: 100, fontSize: '2em', marginBottom: 45 }}
      >
        <span style={{ fontWeight: 'bold' }}>CA</span>/ How To
      </Typography>

      <Grid
        container
        className='scrollContainer'
        wrap='nowrap'
        style={{
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          flex: '0 1 auto',
          maxWidth: 1000,
          margin: 'auto',
          marginBottom: 70,
          marginTop: 30
        }}
        spacing={16}
        justify='space-around'
      >
        {caSteps.map(step => (
          <Grid item key={step.title}>
            <InfoGraphic info={step} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={0}
        justify='space-between'
        style={{
          width: '100vw'
        }}
      >
        <Grid
          item
          style={{
            width: '100vw'
          }}
        >
          <InteractionGuidelines />
        </Grid>

        <Grid
          item
          style={{
            width: '100vw'
          }}
        >
          <AffectionLoop />
        </Grid>
      </Grid>
    </div>
  ) : (
    <div id='howTo' ref={howTo} style={{ paddingTop: 20 }}>
      <Typography paragraph variant='caption' style={{ paddingLeft: 40 }}>
        <span style={{ fontWeight: 'bold' }}>CA</span> / How To
      </Typography>
      <Grid
        container
        className='scrollContainer'
        wrap='nowrap'
        style={{
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          flex: '0 1 auto',
          paddingLeft: useMediaQuery(theme.breakpoints.down('xs')) ? 100 : null,
          maxWidth: 800,
          margin: 'auto',
          marginBottom: 70,
          marginTop: 30,
          width: '100%'
        }}
        spacing={16}
        justify='space-around'
      >
        {caSteps.map(step => (
          <Grid item key={step.title}>
            <InfoGraphic info={step} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={0}
        justify='space-between'
        style={{
          background: useMediaQuery(theme.breakpoints.up('740'))
            ? `linear-gradient(90deg, ${theme.palette.ternary.main} 50%, ${
                theme.palette.secondary.main
              } 50%)`
            : null,
          width: '100%'
        }}
      >
        <Grid
          item
          style={{
            width: useMediaQuery(theme.breakpoints.down('740')) ? '100%' : '50%'
          }}
        >
          <InteractionGuidelines />
        </Grid>

        <Grid
          item
          style={{
            width: useMediaQuery(theme.breakpoints.down('740')) ? '100%' : '50%'
          }}
        >
          <AffectionLoop />
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth({ withTheme: true })(HowTo);
