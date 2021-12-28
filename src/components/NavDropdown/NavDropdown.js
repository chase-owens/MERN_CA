import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import navOptions from "../Nav/navOptions.config";
import NavButtons from "../NavButtons/NavButtons.js";

import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withTheme } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Grid from "@material-ui/core/Grid";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";

import { theme } from "../../styles/theme";

const mapStateToProps = (state) => {
  return {
    language: state.languageState.language,
    open: state.sideBarState.open,
  };
};

const NavDropdown = ({ language, open, theme }) => (
  <Popper
    style={{ width: "100%", background: "translucent" }}
    open={open}
    transition
    disablePortal
  >
    {({ TransitionProps }) => (
      <Grow
        {...TransitionProps}
        id="menu-list-grow"
        style={{
          transformOrigin: "center top",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item>
            <NavButtons />
          </Grid>
        </Grid>
      </Grow>
    )}
  </Popper>
);

export default withWidth({ withTheme: true })(
  connect(mapStateToProps)(NavDropdown)
);
