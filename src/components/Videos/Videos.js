import React, { createRef, useRef, useState } from "react";
import { connect } from "react-redux";

import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import videos from "./videos.config";
import VideoCard from "../VideoCard/VideoCard";

const styles = (theme) => ({
  videoCard: {
    [theme.breakpoints.down(740)]: {
      width: "100%",
    },
    [theme.breakpoints.up(740)]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "33.3%",
    },
  },
});

const mapStateToProps = (state) => ({
  focusedVideo: state.videoState.video,
});

export const videoRef = createRef(null);

const Videos = ({ classes, focusedVideo }) => {
  const videoPlayer = useRef();
  const [url, setURL] = useState("false");

  function playVideo(path) {
    setURL(path);
    videoPlayer.current.play();
  }

  return (
    <div
      id="videos"
      ref={videoRef}
      style={{ padding: 40, margin: "auto", overflow: "hidden" }}
    >
      <Typography paragraph variant="caption">
        <span style={{ fontWeight: "bold" }}>CA</span> / Videos
      </Typography>
      <Typography style={{ fontSize: "2em" }} paragraph variant="h1">
        Videos
      </Typography>
      <Grid container spacing={5} justifyContent="flex-start">
        {videos.map((video) => (
          <Grid item key={video.title} className={classes.videoCard}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(
  withWidth({ withTheme: true })(connect(mapStateToProps, null)(Videos))
);
