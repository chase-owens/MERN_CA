import React, { createRef, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { theme } from "../../styles/theme";
import css from "./About.scss";

import aboutPoints from "./about.config";
import targetOutcomes from "./targetOutcomes.config";
import AboutCardSmall from "./AboutCardSmall";
import AboutCardBig from "./AboutCardBig";
import TargetOutcomesSmall from "./TargetOutcomesSmall";

import { isMobile } from "react-device-detect";

const getBackground = (i) => {
  switch (i) {
    case 0:
      return theme.palette.secondary.main;
    case 1:
      return theme.palette.ternary.main;
    case 2:
      return theme.palette.secondary.main;
    default:
      return null;
  }
};

const About = ({ theme }) => {
  const bottomScrollContainer = createRef(null);

  useEffect(() => {
    const scrollContainer = bottomScrollContainer.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  }, [bottomScrollContainer]);

  return (
    <div
      style={{
        paddingBottom: 70,
        paddingTop: useMediaQuery(theme.breakpoints.down(740)) ? 0 : 20,
      }}
    >
      {useMediaQuery(theme.breakpoints.down(740)) && (
        <div
          style={{
            maxWidth: isMobile ? "calc(100vw - 20px)" : undefined,
          }}
        >
          <div
            style={{
              margin: "0 40px 60px 40px",
            }}
          >
            <Typography paragraph variant="caption">
              <span style={{ fontWeight: "bold" }}>CA</span> / About
            </Typography>
            <Typography paragraph variant="h4">
              The plan: Create calm connections with affection, love, and praise
            </Typography>
            <Typography variant="body1">
              If your dog is always jumping on you, nipping your hands, or
              biting your clothes to get your attention, don’t worry - that’s a
              good thing! That means your dog loves you, that your affection has
              already been established as a reinforcer, and that you’re ready to
              begin Constructional Affection.
            </Typography>
            <br />
            <Typography variant="body1">
              With Constructional Affection, your dog will calmly solicit your
              attention, politely greet other people, and patiently wait for the
              rest of life's delights.
            </Typography>
          </div>
          <br />
          <Grid
            container
            className="scrollContainer"
            wrap="nowrap"
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              flex: "0 1 auto",
            }}
            spacing={5}
          >
            {aboutPoints?.map((point, i) => {
              let background = getBackground(i);
              let color = "textSecondary";
              return (
                <Grid
                  item
                  key={point.title}
                  style={{
                    flexShrink: 0,
                    width: isMobile ? "85vw" : "65%",
                    height: "65vw",
                    minHeight: 450,
                    minWidth: isMobile ? "85vw" : 400,
                  }}
                >
                  <Card
                    style={{
                      width: "100%",
                      height: "100%",
                      background: background,
                    }}
                  >
                    <AboutCardSmall point={point} color={color} />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <br />
          <Grid
            ref={bottomScrollContainer}
            container
            className="scrollContainer"
            wrap="nowrap"
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              marginTop: 20,
              marginBottom: 20,
            }}
            spacing={5}
          >
            {targetOutcomes?.map((target, index) => (
              <Grid
                item
                key={target.title}
                style={{
                  flexShrink: 0,
                  width: isMobile ? "91vw" : "65%",
                  height: "65vw",
                  minHeight: 450,
                  minWidth: isMobile ? "91vw" : 400,
                  paddingRight: index === targetOutcomes.length - 1 ? 0 : 20,
                }}
              >
                <Card
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <TargetOutcomesSmall target={target} />
                </Card>
              </Grid>
            ))}
          </Grid>
          <br />
          <Typography
            variant="h4"
            style={{
              margin: "0 40px",
            }}
          >
            Traditional training approaches often fail to solve the problem.
          </Typography>
          <div style={{ margin: "0 40px" }}>
            <Typography
              variant="body1"
              style={{
                paddingTop: 30,
                paddingBottom: 5,
              }}
            >
              They momentarily reduce excited behavior.
            </Typography>
            <Typography variant="body1" style={{ paddingBottom: 5 }}>
              They establish calm behaviors in training sessions.
            </Typography>
            <Typography variant="body1" style={{ paddingBottom: 5 }}>
              They struggle to maintain calm behaviors in the natural
              environment.
            </Typography>
          </div>
        </div>
      )}
      {useMediaQuery(theme.breakpoints.up(740)) && (
        <Grid container direction="row" wrap="wrap" justifyContent="flex-start">
          <Grid item sm={8} style={{ padding: "25px 25px 0 25px" }}>
            <Typography paragraph variant="caption">
              <span style={{ fontWeight: "bold" }}>CA</span> / About
            </Typography>
            <Typography
              paragraph
              variant="h2"
              style={{
                fontSize: "1.5em",
              }}
            >
              The plan: Create calm connections with affection, love, and praise
            </Typography>
            <Typography variant="body1">
              If your dog is always jumping on you, nipping your hands, or
              biting your clothes to get your attention, don’t worry - That’s a
              good thing! That means your dog loves you, that your affection has
              already been established as a reinforcer, and that you’re ready to
              begin Constructional Affection.{" "}
            </Typography>
          </Grid>
          {aboutPoints !== undefined &&
            aboutPoints.map((point, i) => {
              let background = getBackground(i);

              let color = theme.palette.text.primary;
              return (
                <Grid
                  item
                  sm={4}
                  key={point.title}
                  style={{
                    height: 200,
                    background: background,
                    minHeight: "33.3vw",
                  }}
                >
                  <AboutCardBig point={point} color={color} />
                </Grid>
              );
            })}
          {targetOutcomes !== undefined &&
            targetOutcomes.map(
              (target, i) =>
                i !== 0 && (
                  <Grid
                    item
                    sm={4}
                    key={target.title}
                    style={{
                      minHeight: "33.3vw",
                    }}
                  >
                    <TargetOutcomesSmall target={target} />
                  </Grid>
                )
            )}
          <Grid
            item
            sm={8}
            style={{
              padding: "40px 25px 0 50px",
            }}
          >
            <Typography
              paragraph
              variant="h2"
              style={{
                fontSize: "1.5em",
              }}
            >
              Traditional training approaches often fail to solve the problem.
            </Typography>
            <Typography
              variant="body1"
              style={{
                paddingTop: 30,
              }}
            >
              They momentarily reduce excited behavior.
            </Typography>
            <Typography variant="body1">
              They establish calm behaviors in training sessions.
            </Typography>
            <Typography variant="body1">
              They struggle to maintain calm behaviors in the natural
              environment.
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default withWidth({ withTheme: true })(About);
