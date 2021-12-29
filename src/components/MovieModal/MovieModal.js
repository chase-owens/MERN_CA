import React, { useRef } from "react";
import ReactPlayer from "react-player";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Pace from "react-pace-progress";

import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleMovie } from "../Videos/videos.action";

import { theme } from "styles/theme";
import { isMobile } from "react-device-detect";

const mapStateToProps = (state) => ({
  focusedVideo: state.videoState.video,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleMovie }, dispatch);

const MovieModal = ({ focusedVideo, toggleMovie }) => {
  return isMobile && focusedVideo !== null ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          opacity: 0.7,
          background: theme.palette.ternary.main,
          position: "relative",
          top: 0,
        }}
      />
      <div
        style={{
          width: "90vw",
          height: "80vh",
          position: "fixed",
          top: 0,
          left: 0,

          marginTop: "5vh",
          marginLeft: "5vw",
        }}
      >
        <ReactPlayer
          style={{
            marginTop: 0,
            padding: 0,
            zIndex: 1800,
          }}
          url={focusedVideo}
          playing
          loop
          width="100%"
          height="100%"
        />
        {/* <video autoPlay controls width='100%'>
        <source src={focusedVideo} />
      </video> */}
      </div>
    </div>
  ) : (
    !isMobile && focusedVideo !== null && (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          // opacity: 0.7,
          // background: theme.palette.ternary.main,
          position: "fixed",
          top: 0,
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            opacity: 0.7,
            background: theme.palette.ternary.main,
            position: "relative",
            top: 0,
          }}
        >
          {useMediaQuery(theme.breakpoints.up(740)) && (
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  style={{
                    position: "fixed",
                    color: "#fff",
                    zIndex: 999,
                    top: 3,
                    right: 3,
                  }}
                  onClick={() => toggleMovie(null)}
                >
                  <Icon
                    style={{
                      paddingBottom: 15,
                      paddingTop: -15,
                      paddingRight: 20,
                      marginRight: -12,
                      marginLeft: -5,
                    }}
                  >
                    <i style={{ fontSize: 40 }} className="material-icons">
                      close
                    </i>
                  </Icon>
                </Button>
              </Grid>
            </Grid>
          )}
        </div>
        <div
          style={{
            width: "90vw",
            height: "90vh",
            position: "fixed",
            top: 0,
            left: 0,

            marginTop: "5vh",
            marginLeft: "5vh",
          }}
        >
          <ReactPlayer
            style={{
              marginTop: 0,
              padding: 0,
              zIndex: 1800,
            }}
            url={focusedVideo}
            playing
            loop
            width="100%"
            height="100%"
          />
        </div>
      </div>
    )
  );
};

export default withWidth({ withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(MovieModal)
);
