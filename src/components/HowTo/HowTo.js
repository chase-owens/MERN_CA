import React, { createRef } from "react";
import { theme } from "../../styles/theme";
import caSteps from "./caSteps.config";
import { isMobile } from "react-device-detect";
import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InteractionGuidelines from "../InteractionGuidelines/InteractionGuidelines";
import AffectionLoop from "../AffectionLoop/AffectionLoop";
import InfoGraphic from "../InfoGraphic/InfoGraphic";

export const howToRef = createRef(null);

const HowTo = () => {
  return (
    <div id="howTo" ref={howToRef} style={{ paddingTop: 20 }}>
      <Typography paragraph variant="caption" style={{ paddingLeft: 40 }}>
        <span style={{ fontWeight: "bold" }}>CA</span> / How To
      </Typography>
      <Grid
        container
        className="scrollContainer"
        wrap="nowrap"
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          flex: "0 1 auto",
          paddingLeft: isMobile
            ? 250
            : useMediaQuery(theme.breakpoints.down("xs"))
            ? 100
            : null,
          maxWidth: 800,
          margin: "auto",
          marginBottom: 70,
          marginTop: 30,
          width: "100%",
        }}
        spacing={2}
        justifyContent="space-around"
      >
        {caSteps.map((step) => (
          <Grid item key={step.title}>
            <InfoGraphic info={step} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={0}
        justifyContent="space-between"
        style={{
          background: useMediaQuery(theme.breakpoints.up("740"))
            ? `linear-gradient(90deg, ${theme.palette.ternary.main} 50%, ${theme.palette.secondary.main} 50%)`
            : null,
          width: "100%",
        }}
      >
        <Grid
          item
          style={{
            width: useMediaQuery(theme.breakpoints.down("740"))
              ? "100%"
              : "50%",
          }}
        >
          <InteractionGuidelines />
        </Grid>

        <Grid
          item
          style={{
            width: useMediaQuery(theme.breakpoints.down("740"))
              ? "100%"
              : "50%",
          }}
        >
          <AffectionLoop />
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth({ withTheme: true })(HowTo);
