import React from 'react';
import { theme } from '../../styles/theme';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { isMobile } from 'react-device-detect';

import logoPath from 'images/Logo.png';

const InfoGraphic = ({ info }) => {
  const color = theme.palette.primary.main;
  return isMobile ? (
    <Paper
      style={{
        width: 400,
        height: 600,
        border: `10px solid ${color}`,
        borderRadius: 8,
        background: '#fff'
      }}
    >
      <div
        style={{
          margin: 'auto',
          width: 280,
          height: 150
        }}
      >
        <div style={{ height: 100, width: '100%', background: color }}>
          <Typography
            align='center'
            variant='body1'
            style={{ lineHeight: 3.1, fontSize: '2em' }}
          >
            {info.ribbonTitle}
          </Typography>
        </div>
        <div
          style={{
            width: 0,
            borderLeft: `140px solid ${color}`,
            borderRight: `140px solid ${color}`,
            borderBottom: `30px solid transparent`
          }}
        />
      </div>
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: color,
          margin: 'auto'
        }}
      >
        <img
          src={logoPath}
          alt=''
          style={{
            height: 80,
            marginLeft: 26,
            marginTop: 19
          }}
        />
      </div>
      <Typography
        paragraph
        align='center'
        variant='h1'
        style={{ margin: '50px 0 30px 0', fontSize: '2em', fontWeight: 'bold' }}
      >
        {info.title}
      </Typography>
      <Typography
        paragraph
        align='center'
        style={{ margin: '0 30px', fontSize: '2em' }}
      >
        {info.description}
      </Typography>
    </Paper>
  ) : (
    <Paper
      style={{
        width: 250,
        height: 390,
        border: `10px solid ${color}`,
        borderRadius: 8,
        background: '#fff',
        marginRight: useMediaQuery(theme.breakpoints.down('xs')) ? 20 : 0
      }}
    >
      <div
        style={{
          margin: 'auto',
          width: 170,
          height: 100
        }}
      >
        <div style={{ height: 70, width: '100%', background: color }}>
          <Typography
            align='center'
            variant='body1'
            style={{ lineHeight: 3.1, fontSize: '1.5em' }}
          >
            {info.ribbonTitle}
          </Typography>
        </div>
        <div
          style={{
            width: 0,
            borderLeft: `85px solid ${color}`,
            borderRight: `85px solid ${color}`,
            borderBottom: `20px solid transparent`
          }}
        />
      </div>
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: color,
          margin: 'auto'
        }}
      >
        <img
          src={logoPath}
          alt=''
          style={{
            height: 80,
            marginLeft: 26,
            marginTop: 19
          }}
        />
      </div>
      <Typography
        paragraph
        align='center'
        variant='h1'
        style={{ marginTop: 40, fontSize: '1.2em', fontWeight: 'bold' }}
      >
        {info.title}
      </Typography>
      <Typography paragraph align='center' style={{ margin: '0 30px' }}>
        {info.description}
      </Typography>
    </Paper>
  );
};

export default withWidth({ withTheme: true })(InfoGraphic);
