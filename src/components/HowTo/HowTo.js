import React from 'react';
import { theme } from '../../styles/theme';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const HowTo = () => {
  return (
    <div
      style={{
        height: 300,
        background: theme.palette.ternary.main
      }}
    >
      <div style={{ padding: '50px 30px 60px 40px' }}>
        <Typography
          paragraph
          variant='caption'
          style={{ color: theme.palette.text.light }}
        >
          <span style={{ fontWeight: 'bold' }}>CA</span> / How To
        </Typography>
      </div>
    </div>
  );
};

export default HowTo;
