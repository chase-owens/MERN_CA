import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { theme } from "../../styles/theme";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const styles = (theme) => ({
  card: {
    "&:hover span": {
      width: "100%",
    },
  },
  answer: {
    width: 0,
  },
});

import Beach from "images/Beach.jpg";
import JerryJase from "images/JerryJase.jpg";
import Kanye from "images/Kanye.png";

const getImage = (imageString) => {
  switch (imageString) {
    case "Beach":
      return Beach;
    case "JerryJase":
      return JerryJase;
    case "Kanye":
      return Kanye;
  }
};

const AboutCardBig = ({ point, color, classes }) => {
  return (
    <div style={{ width: "100%" }} className={classes.card}>
      <div
        style={{
          padding: useMediaQuery(theme.breakpoints.down(800)) ? 15 : 25,
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <Typography paragraph variant="overline" style={{ color: color }}>
          {point.title}
        </Typography>
        <Typography
          paragraph
          wrap="wrap"
          variant="body1"
          style={{ color: color }}
        >
          {point.question}
        </Typography>
      </div>
      <span
        className={classes.answer}
        style={{
          display: "block",
          height: 200,
          minHeight: "33.3vw",
          position: "relative",
          top: 0,
          left: 0,
          background: `url(${getImage(point.image)})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          overflow: "hidden",
          transition: "all .22s ease-in-out",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          style={{
            // height: '100%',
            padding: "20px 30px",
            position: "absolute",
            bottom: 0,
            opacity: 0.8,
            background: "#000",
          }}
        >
          <Grid item>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                // textShadow: '0 1px black'
              }}
              color="textSecondary"
              variant="h2"
            >
              {point.answerTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              style={{
                fontSize: "0.9em",
                fontWeight: "bold",
                maxHeight: 100,
              }}
              variant="body1"
            >
              {point.answerDescription}
            </Typography>
          </Grid>
        </Grid>
      </span>
    </div>
  );
};

export default withStyles(styles)(withWidth({ withTheme: true })(AboutCardBig));
