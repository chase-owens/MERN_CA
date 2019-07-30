import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../styles/theme';

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const logoPath = require('images/Logo.png');

const Captcha = ({ selected, handleChange }) => {
  console.log('Selected: ', selected);
  return (
    <div>
      <Grid
        spacing={8}
        container
        style={{ height: '30vw', width: '30vw', margin: 'auto' }}
      >
        {boxes.map((box, i) => (
          <Grid
            key={box}
            value={i}
            item
            onClick={e => handleChange(i)}
            style={{
              height: '10vw',
              width: '10vw',
              backgroundImage: i === 4 ? `url(${logoPath})` : null,
              border:
                i === 4
                  ? selected.includes(4)
                    ? `4px solid ${theme.palette.ternary.main}`
                    : null
                  : null,
              background:
                i !== 4
                  ? selected.includes(i)
                    ? theme.palette.secondary.dark
                    : theme.palette.secondary.light
                  : null
            }}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Captcha;
