import React from 'react';
import { theme } from '../../styles/theme';
import Typography from '@material-ui/core/Typography';

const Error = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: theme.palette.primary.main
      }}
    >
      <Typography variant='display4'>
        Sorry, An error occurred. Error: The dogs ate the code.
      </Typography>
    </div>
  );
};

export default Error;
