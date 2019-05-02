import React, { Fragment } from 'react';
import LanguageOption from '../LanguageOption/LanguageOption';
import { languages } from '../../languages/languages';
import { changeLanguage } from './language.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeLanguage }, dispatch);

const LanguagePicker = ({ changeLanguage }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {languages.map(languageObject => (
        <div
          key={languageObject.code}
          onClick={() => changeLanguage(languageObject.code)}
        >
          <LanguageOption
            name={languageObject.name}
            code={languageObject.code}
          />
        </div>
      ))}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguagePicker);
