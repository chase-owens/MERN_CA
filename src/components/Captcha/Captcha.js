import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { theme } from '../../styles/theme';

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const logoPath = require('images/Logo.png');

const returnImage = () => {
  return logoPath;
};

const Captcha = ({ selected, handleChange }) => {
  console.log('Selected: ', selected);
  return (
    <div style={{ margin: 'auto' }}>
      <Card
        style={{
          width: '30vw',
          background: theme.palette.primary.main
        }}
      >
        <Grid
          spacing={8}
          justify='space-around'
          container
          style={{
            height: '30vw',
            width: '100%',
            margin: 'auto',
            background: theme.palette.ternary.main,
            overflow: 'hidden',
            padding: 4
          }}
        >
          {boxes.map((box, i) => (
            <Grid
              key={box}
              value={i}
              item
              onClick={e => handleChange(i)}
              style={{
                height: '33%',
                width: '33%',
                borderRadius: '5px',
                border:
                  i === 4
                    ? selected.includes(4)
                      ? `8px solid ${theme.palette.primary.dark}`
                      : `4px solid ${theme.palette.ternary.main}`
                    : `4px solid ${theme.palette.ternary.main}`,
                background:
                  i !== 4
                    ? selected.includes(i)
                      ? theme.palette.secondary.dark
                      : theme.palette.secondary.light
                    : theme.palette.primary.main
              }}
            >
              {i === 4 && (
                <img
                  src={logoPath}
                  alt=''
                  style={{
                    height: '8vw',
                    marginTop: selected.includes(4) ? 0 : '0.2vw',
                    marginLeft: selected.includes(4) ? '0.65vw' : '0.9vw'
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default Captcha;