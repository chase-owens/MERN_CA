import React from 'react';
import ContactForm from './ContactForm';
import { shallow } from 'enzyme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles/theme';

describe('ContactForm', () => {
  it('renders without crashing', () => {
    const contactForm = shallow(
      <MuiThemeProvider theme={theme}>
        <ContactForm />
      </MuiThemeProvider>
    );
    expect(contactForm).toMatchSnapshot();
  });
});
