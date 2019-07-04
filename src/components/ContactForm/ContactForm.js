import React, { useState } from 'react';
import theme from 'styles/theme';
import { isMobile } from 'react-device-detect';

import { withStyles } from '@material-ui/core/styles';
import API from 'utils/uiAPI';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  contactForm: {
    width: '100%',
    height: '100vh',
    background: theme.palette.primary.main
  },
  formContainer: {
    width: '80%',
    maxWidth: isMobile ? null : 400,
    margin: 'auto'
  },
  formHeader: {
    paddingTop: 30,
    fontSize: '2em'
  },
  formInputs: {
    margin: 'auto',
    width: isMobile ? '90%' : 300,
    color: '#000'
  },
  formInput: {
    marginBottom: 13,
    color: theme.palette.text.main
    // '& label': {
    //   fontSize: isMobile ? '2.1em' : null
    // },
    // '& span': {
    //   fontSize: isMobile ? '2.1em' : null
    // }
  },
  buttonContainer: {
    // width: 87,
    // margin: 'auto'
  },
  button: {
    margin: 'auto',
    display: 'block',
    background: theme.palette.ternary.main,
    color: '#fff',
    marginTop: 15,
    '&:hover': {
      background: theme.palette.ternary.main
    }
  }
});

const ContactForm = ({ classes }) => {
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
    <div className={classes.contactForm}>
      <div className={classes.formContainer}>
        <Typography
          style={{ fontSize: isMobile ? '3.4em' : null }}
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
              style={{ width: '100%', fontSize: isMobile ? '1.4em' : null }}
              label='Name'
              placeholder='Name'
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={classes.formInput}>
            <TextField
              style={{ width: '100%', fontSize: isMobile ? '1.4em' : null }}
              label='Email'
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
              value={email}
              type='email'
            />
          </div>
          <div className={classes.formInput}>
            <TextField
              style={{ width: '100%', fontSize: isMobile ? '1.4em' : null }}
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
            style={{ fontSize: isMobile ? '3.4em' : '1em' }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ContactForm);
