import React from 'react';
import { theme } from '../../styles/theme';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Solution = () => {
  return (
    <div
      style={{
        height: 300
      }}
    >
      <div style={{ padding: '50px 30px 60px 40px' }}>
        <Typography paragraph variant='caption'>
          <span style={{ fontWeight: 'bold' }}>CA</span> / Solution
        </Typography>
      </div>
    </div>
  );
};

export default Solution;
