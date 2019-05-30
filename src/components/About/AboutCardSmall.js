import React from 'react';
import withWidth from '@material-ui/core/withWidth';

import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { theme } from '../../styles/theme';

const AboutCardSmall = ({ point }) => {
  return (
    <div>
      <Typography variant='body2'>{point.question}</Typography>
      <Typography paragraph style={{ fontSize: '1.5em' }} variant='headline'>
        {point.answer}
      </Typography>
    </div>
  );
};

export default withWidth({ withTheme: true })(AboutCardSmall);
