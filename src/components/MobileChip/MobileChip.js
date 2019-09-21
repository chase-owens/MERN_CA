import React from 'react';
import { theme } from 'theme';
import Typography from '@material-ui/core/Typography';

const MobileChip = ({ name, color }) => {
  return (
    <div
      style={{
        background: color,
        padding: 6,
        borderRadius: 6,
        border: `thin solid #fff`
      }}
    >
      <Typography variant='button' style={{ color: '#fff' }}>
        {name}
      </Typography>
    </div>
  );
};

export default MobileChip;
