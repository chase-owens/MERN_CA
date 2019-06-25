import React from 'react';
import { theme } from '../../styles/theme';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  footer: {
    width: '100%',
    minHeight: 350,
    background: theme.palette.primary.main,
    padding: 25
  },
  formContainer: {
    width: '80%',
    maxWidth: 400,
    margin: 'auto'
  },
  formHeader: {
    paddingTop: 40,
    fontSize: '2em'
  },
  formInputs: {
    margin: 'auto',
    width: 300
  },
  formInput: {
    marginBottom: 13
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.formContainer}>
        <Typography
          className={classes.formHeader}
          align='center'
          paragraph
          variant='display4'
        >
          Contact Us
        </Typography>
        <div className={classes.formInputs}>
          <div className={classes.formInput}>
            <TextField
              style={{ width: '100%' }}
              label='Name'
              placeholder='Name'
            />
          </div>
          <div className={classes.formInput}>
            <TextField
              style={{ width: '100%' }}
              label='Email'
              placeholder='Email'
            />
          </div>
          <div className={classes.formInput}>
            <TextField
              style={{ width: '100%' }}
              label='Comment'
              multiline
              rowsMax='4'
              placeholder='Comment'
            />
          </div>
        </div>
        <div style={{ width: 70, margin: 'auto' }}>
          <Button
            style={{
              margin: 'auto',
              background: theme.palette.ternary.main,
              color: '#fff',
              marginTop: 15
            }}
            variant='contained'
          >
            Submit
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
