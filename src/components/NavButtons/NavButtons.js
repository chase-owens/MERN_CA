import React, { Fragment } from 'react';
import navButtons from '../Nav/navOptions.config';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { isMobile } from 'react-device-detect';
import { bindActionCreators } from 'redux';
import { toggleSidebar } from '../Nav/nav.actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar }, dispatch);

const mapStateToProps = state => ({
  open: state.sideBarState.open
});

const NavButtons = ({ direction, toggleSidebar }) => {
  return (
    <Grid
      container
      direction={direction}
      justify='space-between'
      style={{
        width: direction === 'column' ? '80%' : '100%',
        margin: direction === 'column' ? 'auto' : null,
        marginTop: direction === 'column' ? 125 : null
      }}
    >
      {navButtons.map(button => (
        <Grid item key={button.title}>
          <Link
            style={{
              textDecoration: 'none'
            }}
            to={button.location}
          >
            {direction === 'column' && (
              <Button
                onClick={toggleSidebar}
                style={{
                  color:
                    direction === 'column' ? theme.palette.text.light : null,
                  fontSize: direction === 'column' ? '2.5em' : null,
                  display: 'block',
                  margin: 'auto'
                }}
              >
                {button.title}
              </Button>
            )}
            {direction === 'row' && (
              <Button
                style={{
                  color:
                    direction === 'column' ? theme.palette.text.light : null,
                  fontSize: direction === 'column' ? '2.5em' : null,
                  display: 'block',
                  margin: 'auto'
                }}
              >
                {button.title}
              </Button>
            )}
          </Link>
          {direction === 'column' && <Divider />}
        </Grid>
      ))}
    </Grid>
  );
};

export default withTheme()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavButtons)
);
