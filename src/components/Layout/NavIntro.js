import React from "react";
import Nav from "../Nav/Nav";
import IntroDiv from "../IntroDiv/IntroDiv";
import { connect } from "react-redux";

import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { theme } from "../../styles/theme";

import { isMobile } from "react-device-detect";

const mapStateToProps = (state) => {
  return {
    language: state.languageState.language,
    open: state.sideBarState.open,
  };
};

const NavIntro = ({ theme }) => {
  // return isMobile ? (
  //   <div>
  //     <nav>
  //       <Nav />
  //     </nav>
  //     <IntroDiv />
  //   </div>
  // ) : (
  return (
    <div
      style={{
        marginLeft: 0,
        paddingLeft: 0,
        background: !useMediaQuery(theme.breakpoints.up(740))
          ? "#fff"
          : `linear-gradient(90deg, #fff 40%, ${theme.palette.primary.main} 40%)`,
      }}
    >
      <nav>
        <Nav />
      </nav>
      <IntroDiv />
    </div>
  );
};

export default withWidth({ withTheme: true })(
  connect(mapStateToProps)(NavIntro)
);
