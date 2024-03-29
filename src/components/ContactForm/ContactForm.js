import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authenticateUser } from "../../app/app.actions";
import { bindActionCreators } from "redux";
import { theme } from "styles/theme";
import { isMobile } from "react-device-detect";

import withWidth from "@material-ui/core/withWidth";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withStyles } from "@material-ui/core/styles";
import { sendContactMessage } from "../../server/httpRequests";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Captcha from "../Captcha/Captcha";

const styles = (theme) => ({
  formContainer: {
    height: "100%",
    margin: "auto",
    paddingBottom: 30,
  },
  innerContainer: {
    width: isMobile && "90vw",
    display: isMobile && "block",
    margin: isMobile && "auto",
    marginLeft: isMobile && "10vw",
  },
  formInputs: {
    color: "#000",
    width: isMobile ? "90vw" : 400,
    display: "block",
    margin: "auto",
    marginLeft: isMobile && "10vw",
  },
  formInput: {
    marginBottom: 13,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color: "transparent",
    "& label": {},
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.warning.main,
    color: "#fff",
    margin: "15px 0",
    "&:hover": {
      background: theme.palette.warning.main,
    },
    "& span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  input: {
    fontSize: "1.8em",
    border: "none",
    outline: "none",
    borderBottom: "thin solid #000",
    background: theme.palette.primary.main,
    overflow: "visible",
    "&::placeholder": {
      color: "#fff",
      fontSize: "2.7em",
    },
  },
});

const relations = [
  "above",
  "below",
  "on the left of",
  "on the right of",
  "with an edge touching",
];

const mapStateToProps = (state) => ({
  authenticated: state.authState.authenticated,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ authenticateUser }, dispatch);

// Provide feedback pass/fail Turing Test
// arrange for protected route

const ContactForm = ({ classes, authenticated, authenticateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isAuthenticating, setAuthenticating] = useState(false);

  const [attempts, setAttempts] = useState(0);
  const [timeBegin, setTimeBegin] = useState(null);

  const [selected, setSelected] = useState([]);
  const [relation, setRelation] = useState(null);
  const [prevRelation, setPrevRelation] = useState(null);
  const [
    committedErrorOnlySelectOneBoxDirectlyToSide,
    setErrorOnlySelectOneBoxDirectlyToSide,
  ] = useState(false);
  const [unknownError, setUnknownError] = useState(false);

  const getRelation = () => Math.floor(Math.random() * relations.length);

  const administerTuringTest = () => {
    selected.length !== 0 && setSelected([]);
    setRelation(relations[getRelation()]);
    setAuthenticating(true);
    setTimeStarted();
  };

  const setTimeStarted = () => {
    let now = new Date();
    setTimeBegin(now);

    while (isAuthenticating) {
      setInterval();
    }
  };

  const getDurationOfAttempt = () => {
    const timeEnd = new Date();
    const duration = timeEnd.getTime() - timeBegin.getTime();
  };

  const turingTest = () => {
    let passed = false;

    setAttempts((prevAttempts) => prevAttempts + 1);

    switch (relation) {
      case "above":
        if (selected.length !== 3) {
          break;
        }
        selected.includes(0) &&
          selected.includes(1) &&
          selected.includes(2) &&
          (passed = true);
        break;
      case "below":
        if (selected.length !== 3) {
          break;
        }
        selected.includes(6) &&
          selected.includes(7) &&
          selected.includes(8) &&
          (passed = true);
        break;
      case "on the left of":
        if (selected.length !== 3) {
          break;
        }
        selected.includes(0) &&
          selected.includes(3) &&
          selected.includes(6) &&
          (passed = true);
        break;
      case "on the right of":
        if (selected.length !== 3) {
          break;
        }
        selected.includes(2) &&
          selected.includes(5) &&
          selected.includes(8) &&
          (passed = true);
        break;
      case "with an edge touching":
        if (selected.length !== 4) {
          break;
        }
        selected.includes(1) &&
          selected.includes(3) &&
          selected.includes(5) &&
          selected.includes(7) &&
          (passed = true);

        break;
    }
    return passed;
  };

  const cancelTuringTest = () => {
    setAuthenticating(false);
    setSelected([]);
  };

  const sendData = () => {
    !isAuthenticating && administerTuringTest();

    if (isAuthenticating) {
      if (turingTest()) {
        getDurationOfAttempt();
        setErrorOnlySelectOneBoxDirectlyToSide(false);
        setAttempts(0);
        setTimeBegin(null);

        authenticateUser();

        const data = { name, email, message };
        sendContactMessage(data);

        resetForm();
        setAuthenticating(false);
      } else {
        if (checkErrorOnlySelectOneBoxDirectlyToSide()) {
          setPrevRelation(relation);
          setErrorOnlySelectOneBoxDirectlyToSide(true);
          setUnknownError(false);
        } else {
          setErrorOnlySelectOneBoxDirectlyToSide(false);
          setUnknownError(true);
        }
        administerTuringTest();
      }
    }
  };

  const checkErrorOnlySelectOneBoxDirectlyToSide = () => {
    let committedError = false;
    if (selected.length === 1 && attempts < 5) {
      switch (relation) {
        case "above":
          if (selected[0] === 1) {
            committedError = true;
            return committedError;
          }

        case "below":
          if (selected[0] === 7) {
            committedError = true;
            return committedError;
          }

        case "on the left of":
          if (selected[0] === 3) {
            committedError = true;
            return committedError;
          }

        case "on the right of":
          if (selected[0] === 5) {
            committedError = true;
            return committedError;
          }
        default:
          return false;
      }
    }
    return committedError;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleChange = (i) => {
    if (selected.includes(i)) {
      unSelectBox(i);
    } else {
      selectBox(i);
    }
  };

  const selectBox = (i) => {
    let input = [i];
    let nowSelected = selected.concat(input);
    setSelected(nowSelected);
  };

  const unSelectBox = (i) => {
    let nowSelected = selected.filter((n) => n !== i);
    setSelected(nowSelected);
  };

  return !authenticated ? (
    <div className={classes.formContainer}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        style={{ width: "100%" }}
      >
        <Grid item sm={12} md={6}>
          <Grid container justifyContent="center">
            <Grid item>
              <div className={classes.formInputs}>
                <div className={classes.formInput}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className={classes.formInput}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                  />
                </div>
                <div className={classes.formInput}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Message"
                    multiline
                    maxRows={4}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {isAuthenticating && (
          <Grid item sm={12} md={6}>
            <Grid container style={{ width: "100%" }} justifyContent="center">
              <Grid item>
                <div className={classes.innerContainer}>
                  {unknownError && (
                    <Typography
                      style={{ fontSize: "1.2em", color: "#f00" }}
                      align="center"
                      variant="body1"
                    >
                      Let's try that again
                    </Typography>
                  )}
                  <Typography
                    style={{ fontSize: "1.5em" }}
                    align="center"
                    paragraph
                    variant="body1"
                  >
                    Before we send the message, please select the boxes{" "}
                    {relation} the logo.
                  </Typography>
                  {committedErrorOnlySelectOneBoxDirectlyToSide && (
                    <Typography
                      style={{ fontSize: "1em" }}
                      align="center"
                      paragraph
                      variant="body1"
                    >
                      <span style={{ color: "#f00" }}>Hint:</span> On your last
                      attempt, there were 3 boxes {prevRelation} the logo
                    </Typography>
                  )}

                  <Grid item>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Captcha
                          selected={selected}
                          handleChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <div style={{ width: isMobile ? "100vw" : "100%" }}>
        <Grid
          style={{ maxWidth: "100vw" }}
          container
          justifyContent="center"
          spacing={isMobile ? 2 : 5}
        >
          {isAuthenticating && (
            <Grid item style={{ display: "block", textAlign: "center" }}>
              <Button
                className={classes.button}
                onClick={cancelTuringTest}
                variant="contained"
                style={{
                  fontSize: "1em",
                  paddingTop: 8,
                }}
              >
                Cancel
              </Button>
            </Grid>
          )}
          <Grid item style={{ display: "block", textAlign: "center" }}>
            <Button
              className={classes.button}
              onClick={sendData}
              variant="contained"
              style={{
                fontSize: "1em",
                paddingTop: 8,
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <Redirect to="/thankyou" />
  );
};

export default withStyles(styles)(
  withWidth({ withTheme: true })(
    connect(mapStateToProps, mapDispatchToProps)(ContactForm)
  )
);
