import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import { withStyles } from '@material-ui/core/styles';
import API from 'utils/api';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  footer: {
    // width: '100%',
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
    paddingTop: 30,
    fontSize: '2em'
  },
  formInputs: {
    margin: 'auto',
    width: 300
  },
  formInput: {
    marginBottom: 13
  },
  buttonContainer: {
    width: 87,
    margin: 'auto'
  },
  button: {
    margin: 'auto',
    background: theme.palette.ternary.main,
    color: '#fff',
    marginTop: 15
  }
});

const Footer = ({ classes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendData = () => {
    const data = { name, email, message };
    console.log(data);
    API.post('/contact', data)
      .then(res => {
        // resetForm();
        console.log(res);
      })
      .catch(err => console.log('Message not sent', err));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

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
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={classes.formInput}>
            <TextField
              style={{ width: '100%' }}
              label='Email'
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={classes.formInput}>
            <TextField
              style={{ width: '100%' }}
              label='Comment'
              multiline
              rowsMax='4'
              placeholder='Comment'
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            onClick={sendData}
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
