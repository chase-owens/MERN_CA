import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

import { theme } from '../../styles/theme';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
  card: {
    '&:hover span': {
      background: '#ff0',
      width: '100%'
    }
  },
  answer: {
    width: 0
  }
});

const AboutCardBig = ({ point, color, classes }) => {
  return (
    <div style={{ width: '100%' }} className={classes.card}>
      <div
        style={{
          padding: useMediaQuery(theme.breakpoints.down(800)) ? 15 : 25,
          position: 'absolute',
          display: 'block'
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
          textAlign: 'center',
          display: 'block',
          height: 200,
          minHeight: '33.3vw',
          position: 'relative',
          top: 0,
          left: 0,

          overflow: 'hidden',
          transition: 'all .18s ease-in-out'
        }}
      >
        <Typography paragraph align='center' variant='overline'>
          {point.title}
        </Typography>
        <Typography
          paragraph
          align='center'
          style={{ fontSize: '0.8em' }}
          variant='headline'
        >
          {point.answer}
        </Typography>
      </span>
    </div>
  );
};

export default withStyles(styles)(withWidth({ withTheme: true })(AboutCardBig));
