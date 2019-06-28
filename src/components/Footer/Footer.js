import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  footer: {
    // width: '100%',
    minHeight: 350,
    background: theme.palette.primary.main,
    padding: 25
  }
});

const Footer = ({ classes }) => {
  return <footer className={classes.footer} />;
};

export default withStyles(styles)(Footer);
