import React, { useRef, useState } from 'react';
import { theme } from '../../styles/theme';
import withWidth from '@material-ui/core/withWidth';
import { isIOS } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMovie } from '../Videos/videos.action';

import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Nanook from 'images/Nanook.jpg';
import Blackie from 'images/Blackie.jpg';
import Jax from 'images/Jax.jpg';
import Jerry from 'images/Jerry.jpg';
import Peeper from 'images/Peeper.jpg';
import Ranatta from 'images/Ranatta.jpg';
import Rocky from 'images/Rocky.jpg';
import Shelter from 'images/Shelter.jpg';

const mapStateToProps = state => ({
  focusedVideo: state.videoState.video
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMovie }, dispatch);

const styles = theme => ({
  card: {
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
  innerCard: {
    [theme.breakpoints.down(740)]: {
      height: 350
    },
    [theme.breakpoints.up(740)]: {
      height: 240
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
  // text: {
  //   [theme.breakpoints.down(740)]: {
  //     paddingTop: 350,
  //     paddingBottom: -350
  //   },
  //   [theme.breakpoints.up(740)]: {
  //     paddingTop: 240,
  //     paddingBottom: -240
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     paddingTop: 200,
  //     paddingBottom: -240
  //   }
  // },
  mobileCard: {
    width: '100%',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover span': {
      background: theme.palette.primary.main
    },
    '& i': {
      paddingTop: 225,
      fontSize: 170,

      paddingLeft: 45
    },
    '&:hover i': {
      paddingTop: 200,
      fontSize: 220,
      paddingLeft: 20
    },
    '&:hover i span': {
      // height: 200
    }
  },
  mobileSkin: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: 350,
    top: -350,
    left: 0,
    borderRadius: 5,
    opacity: 0.8
  },
  mobileImage: {
    width: '100%',
    height: 350,
    display: 'block',

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  },
  mobileIcon: {
    display: 'block',
    margin: 'auto',
    color: '#fff',
    height: 350,
    width: 100
  },
  mobileText: {
    paddingTop: 350,
    paddingBottom: -350
  }
});

const videoPath = `https://youtu.be/A0WBNze3oFY`;

const VideoCardMobile = ({video}) => {
  const videoPlayer = useRef();
  const [isPlaying, setPlaying] = useState(false);

  // const playVideo = () => {
  //   videoPlayer.play();
  // };

  return (
    <video
      // onClick={playVideo()}
      poster={`${returnImage(video.imagePath)}`}
      style={{
        // visibility: isPlaying ? 'visible' : 'hidden',
        zIndex: 1800
      }}
      controls={true}
    >
      <source src={video.videoPath)} />
    </video>
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
    )(VideoCardMobile)
  )
);
