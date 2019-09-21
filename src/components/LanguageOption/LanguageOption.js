import React, { Fragment } from 'react';
import { theme } from '../../styles/theme';

const LanguagePicker = ({ name }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h2>{name}</h2>
    </div>
  );
};

export default LanguagePicker;
