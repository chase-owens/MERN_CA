import React from 'react';
import { theme } from '../../styles/theme';

import { isMobile } from 'react-device-detect';
import withWidth from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const InteractionGuidelines = () => {
  return (
    <div
      style={{
        padding: 30,
        background: theme.palette.ternary.main,
        fontSize: isMobile ? '2em' : '1em'
      }}
    >
      <Typography
        color='textSecondary'
        paragraph
        variant='h3'
        style={{ fontSize: isMobile ? '2em' : '1em' }}
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
      <Typography color='textSecondary' paragraph align='center'>
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
      <Typography color='textSecondary' paragraph align='center'>
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
      <Typography color='textSecondary' paragraph align='center'>
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
      <Typography color='textSecondary' align='center'>
        If sitting or lying down occurs, pet with two hands
      </Typography>
    </div>
  );
};

export default withWidth({ withTheme: true })(InteractionGuidelines);
