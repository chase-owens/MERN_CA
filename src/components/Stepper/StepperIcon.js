import React from 'react';
import Typography from '@material-ui/core/Typography';

const StepperIcon = ({ content }) => {
  return (
    <Typography
      style={{
        textAlign: 'center',
        height: '100%',
        lineHeight: '30px',
        color: '#fff'
      }}
    >
      {content}
    </Typography>
  );
};

export default StepperIcon;
