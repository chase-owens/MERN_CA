import React from 'react';

import { theme } from 'styles/theme';

import Nav from '../Nav/Nav';
import ContactForm from '../ContactForm/ContactForm';
import ContactNav from '../ContactNav/ContactNav';

const Contact = () => {
  return (
    <div style={{ background: theme.palette.primary.main }}>
      <ContactNav />
      <ContactForm />
    </div>
  );
};

export default Contact;
