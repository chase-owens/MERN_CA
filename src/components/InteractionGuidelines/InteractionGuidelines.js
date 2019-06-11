import React from 'react';
import { theme } from '../../styles/theme';

import Paper from '@material-ui/core/Paper';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const InteractionGuidelines = () => {
  return (
    <Paper style={{ padding: 10, width: 400 }}>
      <Typography
        paragraph
        variant='h3'
        style={{ fontSize: '1em' }}
        align='center'
      >
        Interaction Guidelines
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
      <Typography paragraph align='center'>
        When the dog approachees, pet the dog with one hand as long as all four
        feet are on the ground
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
      <Typography paragraph align='center'>
        If any excited behaviors occur or the dog leaves, discontinue petting
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
      <Typography paragraph align='center'>
        When the dog returns or the excited behaviors are no longer occurring,
        resume petting
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
          4
        </p>
      </div>
      <Typography align='center'>
        If sitting or lying down occurs, pet with two hands
      </Typography>
    </Paper>
  );
};

export default withWidth({ withTheme: true })(InteractionGuidelines);
