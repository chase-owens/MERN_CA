import React from 'react';
import { theme } from '../../styles/theme';
import withWidth from '@material-ui/core/withWidth';
import { isMobile } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMovie } from '../Videos/videos.action';

import { changeLanguage } from '../LanguagePicker/language.actions';

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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMovie }, dispatch);

const styles = theme => ({
  card: {
    paddingBottom: -100,
    marginBottom: 10,
    width: '100%',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover span': {
      background: theme.palette.primary.main
    },
    '& i': {
      [theme.breakpoints.down(740)]: {
        paddingTop: 130,
        fontSize: 80
      },
      [theme.breakpoints.up(740)]: {
        paddingTop: 90,
        fontSize: 60
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: 70
      },
      // paddingTop: theme.breakpoints.down('sm') ? 90 : 70,
      paddingLeft: 10
    },
    '&:hover i': {
      // fontSize: 80,
      [theme.breakpoints.down(740)]: {
        paddingTop: 120,
        fontSize: 100
      },
      [theme.breakpoints.up(740)]: {
        paddingTop: 80,
        fontSize: 80
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: 60
      },
      paddingLeft: 0
    },
    '&:hover i span': {
      // height: 200
    }
  },
  cardImage: {
    position: 'absolute',
    [theme.breakpoints.down(740)]: {
      width: 'calc(100% - 80px)',
      height: 450
    },
    [theme.breakpoints.up(740)]: {
      width: '43%',
      height: 360
    },
    [theme.breakpoints.up('md')]: {
      width: '28%',
      height: 290
    }
  },
  icon: {
    display: 'block',
    margin: 'auto',
    color: '#fff',
    [theme.breakpoints.down(740)]: {
      height: 350,
      width: 100
    },
    [theme.breakpoints.up(740)]: {
      height: 240,
      width: 80
    },
    [theme.breakpoints.up('md')]: {
      height: 200
    }
  },
  image: {
    width: '100%',
    [theme.breakpoints.down(740)]: {
      height: 350
    },
    [theme.breakpoints.up(740)]: {
      height: 240
    },
    [theme.breakpoints.up('md')]: {
      height: 200
    },
    display: 'block',

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  },
  skin: {
    position: 'relative',
    display: 'block',
    width: '100%',
    [theme.breakpoints.down(740)]: {
      height: 350,
      top: -350
    },
    [theme.breakpoints.up(740)]: {
      height: 240,
      top: -240
    },
    [theme.breakpoints.up('md')]: {
      height: 200,
      top: -200
    },
    left: 0,
    borderRadius: 5,
    opacity: 0.8
  },
  text: {
    [theme.breakpoints.down(740)]: {
      paddingTop: 350,
      paddingBottom: -350
    },
    [theme.breakpoints.up(740)]: {
      paddingTop: 240,
      paddingBottom: -240
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 200,
      paddingBottom: -240
    }
  }
});

const VideoCard = ({ video, focusedVideo, classes, toggleMovie }) => {
  console.log('Focused Video: ', focusedVideo);
  return isMobile ? (
    <div className={classes.card} onClick={() => toggleMovie(video.videoPath)}>
      <div style={{ width: '100%', height: 500 }}>
        <Card
          style={{
            backgroundImage: `url(${returnImage(video.imagePath)})`,
            display: 'block',

            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            width: '100%',
            height: 500
          }}
        />
        <span
          style={{
            left: 0,
            borderRadius: 5,
            opacity: 0.8,
            position: 'relative',
            display: 'block',
            width: '100%',
            height: 500,
            top: -500
          }}
        >
          <div className={classes.iconWrapper}>
            <Icon className={classes.icon}>
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
  ) : (
    <div className={classes.card} onClick={() => toggleMovie(video.videoPath)}>
      <div className={classes.cardImage}>
        <Card
          className={classes.image}
          style={{
            backgroundImage: `url(${returnImage(video.imagePath)})`
          }}
        />
        <span className={classes.skin}>
          <div className={classes.iconWrapper}>
            <Icon className={classes.icon}>
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
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(VideoCard)
  )
);
