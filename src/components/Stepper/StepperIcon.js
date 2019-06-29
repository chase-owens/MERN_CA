import React from 'react';
import Typography from '@material-ui/core/Typography';
import { isMobile } from 'react-device-detect';

const StepperIcon = ({ content }) => {
  return (
    <Typography
      style={{
        textAlign: 'center',
        height: '100%',
        lineHeight: isMobile ? '70px' : '30px',
        fontSize: isMobile ? 50 : null,
        color: '#fff'
      }}
    >
      {content}
    </Typography>
  );
};

export default StepperIcon;
