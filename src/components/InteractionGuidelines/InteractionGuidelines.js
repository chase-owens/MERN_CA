import React from "react";
import { theme } from "../../styles/theme";

import { isMobile } from "react-device-detect";
import withWidth from "@material-ui/core/withWidth";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  text: {
    fontSize: "1em",
  },
});

const InteractionGuidelines = ({ classes }) => {
  return (
    <div
      style={{
        padding: 30,
        background: theme.palette.ternary.dark,
      }}
    >
      <Typography color="textSecondary" paragraph variant="h4" align="center">
        Interaction Guidelines
      </Typography>
      <br />
      <Typography
        className={classes.text}
        color="textSecondary"
        paragraph
        align="center"
      >
        When the dog approaches, pet the dog with one hand as long as all four
        feet are on the ground
      </Typography>
      <br />
      <Typography
        className={classes.text}
        color="textSecondary"
        paragraph
        align="center"
      >
        If any excited behaviors occur or the dog leaves, discontinue petting
      </Typography>
      <br />
      <Typography
        className={classes.text}
        color="textSecondary"
        paragraph
        align="center"
      >
        When the dog returns or the excited behaviors are no longer occurring,
        resume petting
      </Typography>
      <br />
      <Typography className={classes.text} color="textSecondary" align="center">
        If sitting or lying down occurs, pet with two hands
      </Typography>
    </div>
  );
};

export default withStyles(styles)(
  withWidth({ withTheme: true })(InteractionGuidelines)
);
