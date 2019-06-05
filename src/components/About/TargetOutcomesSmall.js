import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Sequence from '../Stepper/Sequence';

import { theme } from '../../styles/theme';

const TargetOutcomesSmall = ({ target }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.palette.primary.main
      }}
    >
      <Typography
        style={{ padding: `40px 0 30px 0` }}
        align='center'
        variant='title'
      >
        {target.title}
      </Typography>
      <Sequence steps={target.steps} />
    </div>
  );
};

export default TargetOutcomesSmall;
