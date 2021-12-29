import React from "react";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeAudience } from "../Translation/translation.actions";

import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";

import { theme } from "../../styles/theme";

import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const mapStateToProps = (state) => ({
  audience: state.audienceState.audience,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeAudience }, dispatch);

const Chip = ({ label, value, audience, changeAudience }) => {
  const background =
    value === audience ? theme.palette.secondary.main : "transparent";
  const color = theme.palette.text.primary;

  return (
    <div>
      <Button
        value={value}
        onClick={() => changeAudience(value)}
        style={{
          border: useMediaQuery(theme.breakpoints.down(740))
            ? `thin solid ${theme.palette.text.secondary}`
            : `thin solid ${theme.palette.text.primary}`,
          background: background,
          borderRadius: 50,
          boxSizing: "border-box",
          display: "inline-block",
        }}
      >
        <Typography
          variant="caption"
          style={{
            padding: "0 5px",
            color: `${color}`,
            fontSize: null,
          }}
        >
          {label}
        </Typography>
      </Button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth({ withTheme: true })(Chip));
