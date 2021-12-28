import React from "react";
import { connect } from "react-redux";

import NavButtons from "../NavButtons/NavButtons";

import Grid from "@material-ui/core/Grid";
import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { theme } from "../../styles/theme";
import Hamburger from "./Hamburger";
import NavPage from "../NavDropdown/NavPage";

import logoPath from "images/Logo.png";

import { isMobile } from "react-device-detect";

const mapStateToProps = (state) => {
  return {
    language: state.languageState.language,
    open: state.sideBarState.open,
    audience: state.audienceState.audience,
    focusedVideo: state.videoState.video,
  };
};

const Nav = ({ theme, language, open, audience, focusedVideo }) => (
  <div
    style={{
      background: "transparent",
      width: "100%",
      margin: "auto",
    }}
  >
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{
        height: 88,
        lineHeight: 1,
        width: "calc(100% - 40px)",
        margin: "auto",
      }}
    >
      <Grid item style={{ marginTop: 5 }}>
        <img height={50} src={logoPath} alt="logo" />
      </Grid>
      <Grid item>
        {useMediaQuery(theme.breakpoints.up("md")) ? (
          <NavButtons direction="row" />
        ) : (
          <Hamburger />
        )}
      </Grid>
    </Grid>
    <NavPage />
  </div>
);

export default withWidth({ withTheme: true })(connect(mapStateToProps)(Nav));
