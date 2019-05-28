import React, { Fragment } from 'react';
import { theme } from '../../styles/theme';

const LanguagePicker = ({ name }) => {
  return (
    <Fragment style={{ width: '100%', height: '100%' }}>
      {
        <div>
          <h2>{name}</h2>
        </div>
      }
    </Fragment>
  );
};

export default LanguagePicker;
