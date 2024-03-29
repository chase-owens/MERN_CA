import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { theme } from "../../styles/theme";
import { isMobile } from "react-device-detect";
import { withStyles } from "@material-ui/core/styles";

import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const logoPath = require("images/Logo.png");

const styles = (theme) => ({
  box: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Captcha = ({ selected, handleChange, classes }) => {
  return (
    <div style={{ width: "100%" }}>
      {useMediaQuery(theme.breakpoints.down(675)) && (
        <Card
          style={{
            width: isMobile ? "90vw" : "30vw",
            background: theme.palette.primary.main,
            display: "block",
            margin: "auto",
          }}
        >
          <Grid
            justify="space-around"
            container
            style={{
              height: isMobile ? "90vw" : "30vw",
              width: "100%",
              margin: "auto",
              background: theme.palette.ternary.main,
              overflow: "hidden",
              padding: 4,
            }}
          >
            {boxes.map((box, i) => (
              <Grid
                className={classes.box}
                key={box}
                value={i}
                item
                onClick={(e) => handleChange(i)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "33%",
                  width: "33%",
                  borderRadius: "5px",
                  border:
                    i === 4
                      ? selected.includes(4)
                        ? `4px solid ${theme.palette.primary.dark}`
                        : `2px solid ${theme.palette.ternary.main}`
                      : `2px solid ${theme.palette.ternary.main}`,
                  background:
                    i !== 4
                      ? selected.includes(i)
                        ? theme.palette.secondary.dark
                        : theme.palette.secondary.light
                      : theme.palette.primary.main,
                }}
              >
                {i === 4 && (
                  <img
                    src={logoPath}
                    alt=""
                    style={{
                      height: isMobile ? "25vw" : "8vw",
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Card>
      )}
      {useMediaQuery(theme.breakpoints.up(675)) && (
        <Card
          style={{
            width: "30vw",
            background: theme.palette.primary.main,
          }}
        >
          <Grid
            justifyContent="space-around"
            container
            style={{
              height: "30vw",
              width: "100%",
              margin: "auto",
              background: theme.palette.ternary.main,
              overflow: "hidden",
              padding: 4,
            }}
          >
            {boxes.map((box, i) => (
              <Grid
                className={classes.box}
                key={box}
                value={i}
                item
                onClick={(e) => handleChange(i)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "33%",
                  width: "33%",
                  borderRadius: "5px",
                  border:
                    i === 4
                      ? selected.includes(4)
                        ? `8px solid ${theme.palette.primary.dark}`
                        : `4px solid ${theme.palette.ternary.main}`
                      : `4px solid ${theme.palette.ternary.main}`,
                  background:
                    i !== 4
                      ? selected.includes(i)
                        ? theme.palette.secondary.dark
                        : theme.palette.secondary.light
                      : theme.palette.primary.main,
                }}
              >
                {i === 4 && (
                  <img
                    src={logoPath}
                    alt="logo"
                    style={{
                      height: "8vw",
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Card>
      )}
    </div>
  );
};

export default withStyles(styles)(withWidth({ withTheme: true })(Captcha));
