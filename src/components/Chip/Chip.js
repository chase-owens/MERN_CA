import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAudience } from '../Translation/translation.actions';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { theme } from '../../styles/theme';
import { StepButton } from '@material-ui/core';

const mapStateToProps = state => ({
  audience: state.audienceState.audience
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeAudience }, dispatch);

const Chip = ({ label, value, audience, changeAudience }) => {
  console.log(audience);
  const background =
    value === audience
      ? theme.palette.secondary.main
      : theme.palette.ternary.main;
  // const background;
  return (
    <Button
      value={value}
      onClick={() => changeAudience(value)}
      style={{
        border: `thin solid #fff`,
        background: background,
        borderRadius: 50,
        boxSizing: 'border-box',
        display: 'inline-block'
      }}
    >
      <Typography variant='caption' style={{ padding: '0 5px', color: '#fff' }}>
        {label}
      </Typography>
    </Button>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chip);
