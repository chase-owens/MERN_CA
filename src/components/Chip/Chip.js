import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAudience } from '../Translation/translation.actions';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { theme } from '../../styles/theme';

import withWidth from '@material-ui/core/withWidth';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const mapStateToProps = state => ({
  audience: state.audienceState.audience
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeAudience }, dispatch);

const Chip = ({ label, value, audience, changeAudience }) => {
  console.log(audience);
  const background =
    value === audience ? theme.palette.secondary.main : 'transparent';
  const color = useMediaQuery(theme.breakpoints.up(740))
    ? value == audience
      ? theme.palette.text.light
      : theme.palette.text.primary
    : theme.palette.text.light;

  return (
    <Button
      value={value}
      onClick={() => changeAudience(value)}
      style={{
        border: useMediaQuery(theme.breakpoints.down(740))
          ? `thin solid ${theme.palette.text.secondary}`
          : `thin solid ${theme.palette.text.primary}`,
        background: background,
        borderRadius: 50,
        boxSizing: 'border-box',
        display: 'inline-block'
      }}
    >
      <Typography
        variant='caption'
        style={{ padding: '0 5px', color: `${color}` }}
      >
        {label}
      </Typography>
    </Button>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth({ withTheme: true })(Chip));