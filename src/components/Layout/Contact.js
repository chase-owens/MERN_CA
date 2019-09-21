import React from 'react';

import { theme } from 'styles/theme';

import { isMobile } from 'react-device-detect';
import Nav from '../Nav/Nav';
import ContactForm from '../ContactForm/ContactForm';
import ContactNav from '../ContactNav/ContactNav';
import Typography from '@material-ui/core/Typography';

const Contact = () => {
  return (
    <div style={{ background: theme.palette.primary.main, minHeight: '100vh' }}>
      <ContactNav />
      <Typography
        style={{
          fontSize: isMobile ? '2.5em' : '2em',
          padding: 20
        }}
        align='center'
        paragraph
        variant='display4'
      >
        Contact Us
      </Typography>
      <ContactForm />
    </div>
  );
};

export default Contact;
