import React from 'react';
import { theme } from '../../styles/theme';

import Paper from '@material-ui/core/Paper';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AffectionLoop = () => {
  return (
    <div style={{ padding: 30, background: theme.palette.secondary.main }}>
      <Typography
        color='textSecondary'
        paragraph
        variant='h3'
        style={{ fontSize: '1em' }}
        align='center'
      >
        Affection Loop
      </Typography>
      <div
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
      </div>
      <Typography color='textSecondary' paragraph align='center'>
        Start by petting the dog for sitting or lying down. Then withdraw
        afection momentarily, and return provided sitting or lying down is still
        occurring. Begin with very short intervals and gradually increase the
        duration of the loop to 10 seconds.
      </Typography>
      <div
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
      </div>
      <Typography color='textSecondary' paragraph align='center'>
        Once your dog is sitting and waiting patiently for your affection, you
        can alter the environment to more closely resemble the context of your
        goal.
      </Typography>
      <div
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
      </div>
      <Typography color='textSecondary' paragraph align='center'>
        Gradual increases reduce the liklihood that any excited outbursts will
        occur along the way. But don't be alarmed if any do occur. It's usually
        a sign that you've taken too big of a step. If this happens, just take a
        step back and proceed in smaller steps.
      </Typography>
    </div>
  );
};

export default withWidth({ withTheme: true })(AffectionLoop);
