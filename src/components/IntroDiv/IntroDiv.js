import React from 'react';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => {
  return state;
};

const IntroDiv = props => {
  return (
    <Grid container>
      <Grid item>
        <Typography>Becoming Best Friends</Typography>
      </Grid>
      <Grid item>
        <Typography>Affection. Love. Praise</Typography>
      </Grid>
      <Grid item>
        <Typography>
          With Constructional Affection, your dog will calmly solicit your
          attention, politely greet other people, and patiently wait for the
          rest of life's delights.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withTheme()(connect(mapStateToProps)(IntroDiv));
