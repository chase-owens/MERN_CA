import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleSidebar } from "../Nav/nav.actions";
import { toggleMovie } from "../Videos/videos.action";

import withWidth from "@material-ui/core/withWidth";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

import { theme } from "../../styles/theme";

import { isMobile } from "react-device-detect";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    open: state.sideBarState.open,
    focusedVideo: state.videoState.video,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleSidebar, toggleMovie }, dispatch);

const Hamburger = ({ open, toggleSidebar, toggleMovie, focusedVideo }) => {
  return (
    <div>
      {!open && focusedVideo == null && (
        <Button
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            zIndex: 999,
            top: isMobile ? 9 : 10,
            right: 10,
          }}
        >
          <div>
            <hr
              style={{
                width: 30,
                marginBottom: "6px",
                borderColor: theme.palette.secondary.main,
              }}
            />
            <hr
              style={{
                width: 30,
                margin: "6px 0",
                borderColor: theme.palette.secondary.main,
              }}
            />
            <hr
              style={{
                width: 30,
                marginTop: "6px",
                borderColor: theme.palette.secondary.main,
              }}
            />
          </div>
        </Button>
      )}
      {!open && focusedVideo !== null && (
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
            <i style={{ fontSize: 40 }} class="material-icons">
              close
            </i>
          </Icon>
        </Button>
      )}
      {open && (
        <Button
          style={{
            position: "fixed",
            color: "#fff",
            zIndex: 999,
            top: 10,
            right: 10,
          }}
          onClick={toggleSidebar}
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
            <i style={{ fontSize: 40 }} class="material-icons">
              close
            </i>
          </Icon>
        </Button>
      )}
    </div>
  );
};

export default withWidth({ withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Hamburger)
);
