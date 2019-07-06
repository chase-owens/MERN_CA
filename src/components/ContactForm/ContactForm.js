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
    width: isMobile ? '100%' : '80%',
    maxWidth: isMobile ? null : 400,
    margin: 'auto'
  },
  formHeader: {
    paddingTop: 30,
    fontSize: '2em'
  },
  formInputs: {
    margin: 'auto',
    width: isMobile ? '70%' : 300,
    color: '#000'
  },
  formInput: {
    marginBottom: 13,
    display: 'flex',
    flexDirection: 'column',
    color: 'transparent',
    '& label': {
      fontSize: isMobile ? '2.7em' : null
    }
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
  },
  input: {
    fontSize: '1.8em',
    border: 'none',
    outline: 'none',
    borderBottom: 'thin solid #000',
    background: theme.palette.primary.main,
    overflow: 'visible',
    '&::placeholder': {
      color: '#fff',
      fontSize: '2.7em'
    },
    '&:focus input': {
      border: 'none',
      outline: 'none'
    }
  }
});

const ContactForm = ({ classes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const setRows = () => {
    let rows = Math.round(message.length / 28 + 0.5);

    // let extraRows = message.match('//n').length;

    console.log(rows, extraRows);

    return rows + extraRows;
  };

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
          style={{ fontSize: isMobile ? '3.8em' : null }}
          className={classes.formHeader}
          align='center'
          paragraph
          variant='display4'
        >
          Contact Us
        </Typography>
        {isMobile && (
          <div className={classes.formInputs}>
            <div className={classes.formInput}>
              {name !== '' && (
                <label style={{ color: '#fff', fontSize: '1.9em' }} for='name'>
                  Name
                </label>
              )}
              <input
                className={classes.input}
                id='name'
                type='text'
                placeholder='Name'
                onChange={e => setName(e.target.value)}
                value={name}
                style={{ lineHeight: name == '' ? '2.7em' : '1em' }}
              />
            </div>
            <div className={classes.formInput}>
              {email !== '' && (
                <label style={{ color: '#fff', fontSize: '1.9em' }} for='email'>
                  Email
                </label>
              )}
              <input
                className={classes.input}
                id='email'
                type='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                style={{ lineHeight: email == '' ? '2.7em' : '1em' }}
              />
            </div>
            <div className={classes.formInput}>
              {message !== '' && (
                <label
                  style={{ color: '#fff', fontSize: '1.9em' }}
                  for='message'
                >
                  Message
                </label>
              )}
              <textarea
                rows={Math.round(message.length / 28 + 0.5)}
                className={classes.input}
                id='message'
                placeholder='Message'
                onChange={e => setMessage(e.target.value)}
                value={message}
                style={{ lineHeight: message == '' ? '2.7em' : '1em' }}
              />
            </div>
          </div>
        )}
        {!isMobile && (
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
                type='email'
              />
            </div>
            <div className={classes.formInput}>
              <TextField
                style={{ width: '100%' }}
                label='Message'
                multiline
                rowsMax='4'
                placeholder='Message'
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>
        )}
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            onClick={sendData}
            variant='contained'
            style={{
              fontSize: isMobile ? '2.5em' : '1em',
              marginTop: isMobile ? 30 : null
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ContactForm);
