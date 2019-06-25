import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { theme } from '../../styles/theme';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
  card: {
    '&:hover span': {
      width: '100%'
    },
    '&:first-child': {
      // display: 'block'
    }
  },
  answer: {
    width: 0
  }
});

const Beach = require('images/Beach.jpg');
const Jj = require('images/JJ.jpg');
const Kanye = require('images/Kanye.png');

const getImage = imageString => {
  switch (imageString) {
    case 'Beach':
      return Beach;
    case 'JJ':
      return Jj;
    case 'Kanye':
      return Kanye;
  }
};

const AboutCardBig = ({ point, color, classes }) => {
  return (
    <div style={{ width: '100%' }} className={classes.card}>
      <div
        style={{
          padding: useMediaQuery(theme.breakpoints.down(800)) ? 15 : 25,
          position: 'absolute',
          overflow: 'hidden'
        }}
      >
        <Typography paragraph variant='overline' style={{ color: color }}>
          {point.title}
        </Typography>
        <Typography
          paragraph
          wrap='wrap'
          variant='body1'
          style={{ color: color }}
        >
          {point.question}
        </Typography>
      </div>
      <span
        className={classes.answer}
        style={{
          display: 'block',
          height: 200,
          minHeight: '33.3vw',
          position: 'relative',
          top: 0,
          left: 0,
          background: `url(${getImage(point.image)})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          overflow: 'hidden',
          transition: 'all .18s ease-in-out'
        }}
      >
        <Grid
          container
          direction='column'
          justify='flex-end'
          style={{
            height: '100%',
            padding: 40,
            position: 'absolute',
            bottom: 0
          }}
        >
          <Grid item>
            <Typography
              style={{
                fontWeight: 'bold',
                fontSize: '1.4em',
                textShadow: '0 1px black'
              }}
              color='textSecondary'
              variant='h3'
            >
              {point.answerTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color='textSecondary'
              style={{
                fontSize: '1em',
                fontWeight: 'bold',
                textShadow: '0 1px black'
              }}
              variant='headline'
            >
              {point.answerDescription}
            </Typography>
          </Grid>
        </Grid>
      </span>
    </div>
  );
};

export default withStyles(styles)(withWidth({ withTheme: true })(AboutCardBig));
