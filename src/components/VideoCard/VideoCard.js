import React from 'react';
import { theme } from '../../styles/theme';
import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Nanook = require('images/Nanook.jpg');
const Blackie = require('images/Blackie.jpg');
const Jax = require('images/Jax.jpg');
const Jerry = require('images/Jerry.jpg');
const Peeper = require('images/Peeper.jpg');
const Ranatta = require('images/Ranatta.jpg');
const Rocky = require('images/Rocky.jpg');
const Shelter = require('images/Shelter.jpg');

const mapStateToProps = state => ({
  focusedVideo: state.videoState.video
});

const styles = theme => ({
  card: {
    marginBottom: 10,
    width: '100%',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover span': {
      background: theme.palette.primary.main
    },
    '& i': {
      fontSize: 60,
      paddingTop: theme.breakpoints.down('sm') ? 90 : 70,
      paddingLeft: 10
    },
    '&:hover i': {
      fontSize: 80,
      paddingTop: theme.breakpoints.down('sm') ? 80 : 60,
      paddingLeft: 0
    },
    '&:hover i span': {
      // height: 200
    }
  },
  icon: {
    width: 80,
    display: 'block',
    margin: 'auto',
    color: '#fff',
    height: theme.breakpoints.down('sm') ? 240 : 200
  },
  image: {
    width: '100%',
    height: theme.breakpoints.down('sm') ? 240 : 200,
    display: 'block',

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  },
  skin: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: theme.breakpoints.down('sm') ? 240 : 200,
    top: theme.breakpoints.down('sm') ? -240 : -200,
    left: 0,
    borderRadius: 5,
    opacity: 0.8
  },
  text: {
    paddingTop: theme.breakpoints.down('sm') ? 240 : 200
  }
});

const VideoCard = ({ video, focusedVideo, classes }) => {
  console.log(focusedVideo);
  return (
    <div className={classes.card}>
      <div
        style={{
          position: 'absolute',
          width: useMediaQuery(theme.breakpoints.down('sm')) ? '42%' : '28%'
        }}
      >
        <Card
          className={classes.image}
          style={{ backgroundImage: `url(${returnImage(video.imagePath)})` }}
        />
        <span className={classes.skin} style={{}}>
          <div className={classes.iconWrapper}>
            <Icon className={classes.icon} style={{}}>
              <i class='material-icons'>play_circle_filled</i>
            </Icon>
          </div>
        </span>
      </div>

      <br />
      <div className={classes.text}>
        <Typography paragraph variant='headline'>
          {video.title}
        </Typography>

        <Typography variant='body2'>{video.description}</Typography>
      </div>
    </div>
  );
};

const returnImage = image => {
  switch (image) {
    case 'Nanook':
      return Nanook;
    case 'Blackie':
      return Blackie;
    case 'Rocky':
      return Rocky;
    case 'Peeper':
      return Peeper;
    case 'Jerry':
      return Jerry;
    case 'Jax':
      return Jax;
    case 'Shelter':
      return Shelter;
    case 'Ranatta':
      return Ranatta;
  }
};

export default withWidth({ withTheme: true })(
  withStyles(styles)(connect(mapStateToProps)(VideoCard))
);
