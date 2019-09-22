import React from 'react';
import { theme } from '../../styles/theme';

import { isMobile } from 'react-device-detect';
import withWidth from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  text: {
    fontSize: '1em'
  }
});

const InteractionGuidelines = ({ classes }) => {
  return (
    <div
      style={{
        padding: 30,
        background: theme.palette.ternary.main
      }}
    >
      <Typography
        className={classes.text}
        color='textSecondary'
        paragraph
        variant='headline'
        align='center'
      >
        Interaction Guidelines
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
        When the dog approachees, pet the dog with one hand as long as all four
        feet are on the ground
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
        If any excited behaviors occur or the dog leaves, discontinue petting
      </Typography>
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
      <br />
      <Typography
        className={classes.text}
        color='textSecondary'
        paragraph
        align='center'
      >
        When the dog returns or the excited behaviors are no longer occurring,
        resume petting
      </Typography>
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
          4
        </p>
        
      </div> */}
      <br />
      <Typography className={classes.text} color='textSecondary' align='center'>
        If sitting or lying down occurs, pet with two hands
      </Typography>
    </div>
  );
};

export default withStyles(styles)(
  withWidth({ withTheme: true })(InteractionGuidelines)
);
