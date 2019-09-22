import React from 'react';
import { theme } from '../../styles/theme';

import withWidth from '@material-ui/core/withWidth';
import { isMobile } from 'react-device-detect';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  text: {
    fontSize: '1em'
  }
});

const AffectionLoop = ({ classes }) => {
  return (
    <div style={{ padding: 30, background: theme.palette.secondary.main }}>
      <Typography
        className={classes.text}
        color='textSecondary'
        paragraph
        variant='headline'
        align='center'
      >
        Affection Loop
      </Typography>
      <br />
      {/* <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: theme.palette.primary.main,
          margin: 'auto',
          marginTop: 5,
          marginBottom: 5
        }}
      >
        <p
          style={{
            lineHeight: 1,
            width: '100%',
            textAlign: 'center',
            lineHeight: 2.5
          }}
        >
          1
        </p>
      </div> */}
      <Typography
        className={classes.text}
        color='textSecondary'
        paragraph
        align='center'
      >
        Start by petting the dog for sitting or lying down. Then withdraw
        affection momentarily, and return provided sitting or lying down is
        still occurring. Begin with very short intervals and gradually increase
        the duration of the loop to 10 seconds.
      </Typography>
      <br />
      {/* <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: theme.palette.primary.main,
          margin: 'auto',
          marginTop: 5,
          marginBottom: 5
        }}
      >
        <p
          style={{
            lineHeight: 1,
            width: '100%',
            textAlign: 'center',
            lineHeight: 2.5
          }}
        >
          2
        </p>
      </div> */}
      <Typography
        className={classes.text}
        color='textSecondary'
        paragraph
        align='center'
      >
        Once your dog is sitting and waiting patiently for your affection, you
        can alter the environment to more closely resemble the context of your
        goal.
      </Typography>
      <br />
      {/* <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: theme.palette.primary.main,
          margin: 'auto',
          marginTop: 5,
          marginBottom: 5
        }}
      >
        <p
          style={{
            lineHeight: 1,
            width: '100%',
            textAlign: 'center',
            lineHeight: 2.5
          }}
        >
          3
        </p>
      </div> */}
      <Typography
        className={classes.text}
        color='textSecondary'
        paragraph
        align='center'
      >
        Gradual increases reduce the liklihood that any excited outbursts will
        occur along the way. But don't be alarmed if any do occur. It's usually
        a sign that you've taken too big of a step. If this happens, just take a
        step back and proceed in smaller steps.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(
  withWidth({ withTheme: true })(AffectionLoop)
);
