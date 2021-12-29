import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";
import { bindActionCreators } from "redux";
import { toggleSidebar } from "../Nav/nav.actions";
import { connect } from "react-redux";
import useNavButtons from "../Nav/useNavButtons";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleSidebar }, dispatch);

const mapStateToProps = (state) => ({
  open: state.sideBarState.open,
});

const scrollToRef = (ref) => {
  ref.current.current.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavButtons = ({ direction, toggleSidebar }) => {
  const navButtons = useNavButtons();

  const handleButtonClick = (ref) => {
    if (direction === "column") {
      toggleSidebar();
    }

    if (ref.current) {
      scrollToRef(ref);
    }
  };

  return (
    <Grid
      container
      direction={direction}
      justifyContent="space-between"
      style={{
        width: "100%",
      }}
    >
      {navButtons.map((button) => {
        const navButton = (
          <Button
            onClick={() => handleButtonClick(button.ref)}
            style={{
              color: direction === "column" ? theme.palette.text.light : null,
              fontSize: direction === "column" ? "2.5em" : null,
              display: "block",
              margin: "auto",
            }}
          >
            {button.title}
          </Button>
        );

        return (
          <Grid item key={button.title}>
            {button.location ? (
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={button.location}
              >
                {navButton}
              </Link>
            ) : (
              navButton
            )}
            {direction === "column" && <Divider />}
          </Grid>
        );
      })}
    </Grid>
  );
};

const ConnectedNavButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavButtons);

export default withTheme(ConnectedNavButtons);
