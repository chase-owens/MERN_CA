import React from 'react';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { theme } from '../../styles/theme';

const AboutCardSmall = ({ point }) => {
  return (
    <div>
      <Typography variant='body2'>{point.question}</Typography>
      <Typorgraphy paragraph style={{ fontSize: '1.5em' }} variant='headline'>
        {point.answer}
      </Typorgraphy>
    </div>
  );
};

export default withWidth({ withTheme: true })(AboutCArdSmall);
