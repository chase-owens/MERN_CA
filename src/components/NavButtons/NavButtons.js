import React, { Fragment } from 'react';
import navButtons from '../Nav/navOptions.config';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const NavButtons = () => {
  return (
    <Fragment>
      {navButtons.map(button => (
        <Link to={button.location}>
          <Button>{button.title}</Button>
        </Link>
      ))}
    </Fragment>
  );
};

export default withTheme()(NavButtons);
