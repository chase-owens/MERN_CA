import React from 'react';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../styles/theme';
import ContactNav from '../ContactNav/ContactNav';

const ThankYou = () => {
  return (
    <div>
      <ContactNav />
      <Typography
        style={{
          fontSize: isMobile ? '3.8em' : null,
          paddingTop: 20,
          fontSize: '2em'
        }}
        align='center'
        paragraph
        variant='display4'
      >
        Thank you for contacting us.
      </Typography>
      <Typography
        style={{
          fontSize: isMobile ? '3.8em' : null,
          fontSize: '2em'
        }}
        align='center'
        paragraph
        variant='display4'
      >
        You'll receive a reply from us within 24 hours.
      </Typography>
    </div>
  );
};

export default ThankYou;
