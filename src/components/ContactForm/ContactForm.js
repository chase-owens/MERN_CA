import React, { useState } from 'react';
import theme from 'styles/theme';
import { isMobile } from 'react-device-detect';

import { withStyles } from '@material-ui/core/styles';
import { sendContactMessage } from '../../server/httpRequests';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Captcha from '../Captcha/Captcha';

const styles = theme => ({
  contactForm: {
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    background: theme.palette.primary.main
  },
  formContainer: {
    width: isMobile ? '100%' : '80%',
    maxWidth: isMobile ? null : 400,
    margin: 'auto',
    height: '100%'
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

const relations = [
  'above',
  'below',
  'on the left of',
  'on the right of',
  'with an edge touching'
];

// Provide feedback pass/fail Turing Test
// arrange for protected route

const ContactForm = ({ classes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isAuthenticating, setAuthenticating] = useState(false);

  const [selected, setSelected] = useState([]);
  const [relation, setRelation] = useState(null);

  const getRelation = () => Math.floor(Math.random() * relations.length);

  const administerTuringTest = () => {
    setRelation(relations[getRelation()]);
    setAuthenticating(true);
    selected.length !== 0 && setSelected([]);
  };

  const turingTest = () => {
    let passed = false;
    console.log(relation);
    switch (relation) {
      case 'above':
        selected.includes(0) &&
          selected.includes(1) &&
          selected.includes(2) &&
          (passed = true);
      case 'below':
        selected.includes(6) &&
          selected.includes(7) &&
          selected.includes(8) &&
          (passed = true);
      case 'on the left of':
        selected.includes(0) &&
          selected.includes(3) &&
          selected.includes(6) &&
          (passed = true);
      case 'on the right of':
        selected.includes(2) &&
          selected.includes(5) &&
          selected.includes(8) &&
          (passed = true);
      case 'with an edge touching':
        selected.includes(1) &&
          selected.includes(3) &&
          selected.includes(5) &&
          selected.includes(8) &&
          (passed = true);
    }
    console.log('PASSED: ', passed);
    if (!passed) {
      administerTuringTest();
    }
    return passed;
  };

  const cancelTuringTest = () => {
    setAuthenticating(false);
    setSelected([]);
  };

  const sendData = () => {
    !isAuthenticating && administerTuringTest();

    if (isAuthenticating) {
      if (turingTest()) {
        const data = { name, email, message };
        console.log(data);
        sendContactMessage(data);
        resetForm();
      } else {
        administerTuringTest();
      }
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const selectBox = i => {
    console.log('Select: ', i);
    let input = [i];
    let nowSelected = selected.concat(input);
    console.log('NowSelected: ', nowSelected);
    setSelected(nowSelected);
  };

  const unSelectBox = i => {
    let nowSelected = selected.filter(n => n !== i);
    setSelected(nowSelected);
  };

  const handleChange = i => {
    if (selected.includes(i)) {
      unSelectBox(i);
    } else {
      selectBox(i);
    }
  };

  console.log(selected);
  return (
    <Grid className={classes.contactForm}>
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
                <label
                  style={{ color: '#fff', fontSize: '1.9em' }}
                  htmlFor='name'
                >
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
                <label
                  style={{ color: '#fff', fontSize: '1.9em' }}
                  htmlFor='email'
                >
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
                  htmlFor='message'
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
        {isAuthenticating && (
          <div>
            <div>
              <Typography>Click the boxes {relation} the logo</Typography>
            </div>
            <Captcha selected={selected} handleChange={handleChange} />
          </div>
        )}
      </div>
      <Grid container justify='center' spacing={40}>
        {isAuthenticating && (
          <Grid item>
            <Button
              className={classes.button}
              onClick={cancelTuringTest}
              variant='contained'
              style={{
                fontSize: isMobile ? '2.5em' : '1em',
                marginTop: isMobile ? 30 : null
              }}
            >
              Cancel
            </Button>
          </Grid>
        )}
        <Grid item>
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ContactForm);
