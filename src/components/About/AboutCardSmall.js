import React from 'react';
import withWidth from '@material-ui/core/withWidth';

import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { theme } from '../../styles/theme';

import { isMobile } from 'react-device-detect';

const AboutCardSmall = ({ point, color }) => {
  return isMobile ? (
    <div style={{ padding: '30px 30px 0 28px' }}>
      <Typography
        style={{ fontSize: '1.3em' }}
        color={color}
        paragraph
        variant='h5'
      >
        {point.question}
      </Typography>
      <Typography
        style={{ fontSize: '1.3em' }}
        color={color}
        paragraph
        variant='subtitle1'
      >
        {point.answer}
      </Typography>
      {point.citation !== undefined && (
        <Typography
          color={color}
          style={{ fontSize: '1.3em' }}
          paragraph
          variant='overline'
        >
          {point.citation}
        </Typography>
      )}
    </div>
  ) : (
    <div style={{ padding: '30px 30px 0 28px' }}>
      <Typography color={color} paragraph variant='title'>
        {point.question}
      </Typography>
      <Typography color={color} paragraph variant='body2'>
        {point.answer}
      </Typography>
      {point.citation !== undefined && (
        <Typography color={color} paragraph variant='overline'>
          {point.citation}
        </Typography>
      )}
    </div>
  );
};

export default withWidth({ withTheme: true })(AboutCardSmall);
