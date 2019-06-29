import React from 'react';

import Typography from '@material-ui/core/Typography';
import Sequence from '../Stepper/Sequence';

import { theme } from '../../styles/theme';
import { isMobile } from 'react-device-detect';

const TargetOutcomesSmall = ({ target }) => {
  return isMobile ? (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.palette.primary.main
      }}
    >
      <Typography
        style={{ padding: `40px 0 30px 0`, fontSize: '2.5em' }}
        align='center'
        variant='title'
      >
        {target.title}
      </Typography>
      <Sequence style={{ fontSize: '2.1em' }} steps={target.steps} />
    </div>
  ) : (
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
