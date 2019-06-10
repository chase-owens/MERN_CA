import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#29bbf6',
      dark: '#1c7fac',
      light: '#53c4f7',
      contrastText: '#fff'
    },
    secondary: {
      main: '#9c27b0',
      dark: '#6d1b7b',
      light: '#af52bf',
      contrastText: '#fff'
    },
    ternary: {
      main: '#e91e63',
      dark: '#a31545',
      light: '#ed4b82',
      contrastText: '#fff'
    },
    text: {
      primary: '#151515',
      secondary: '#fff',
      main: '#282d45',
      light: '#fff',
      dark: '#151515'
    }
  },
  typography: {
    useNextVariants: true
  },
  spacing: {
    unit: 8
  },
  breakpoints: {
    smmd: 740,
    lg: 1280
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0 , 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0 , 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0 , 1, 1)',
      sharp: 'cubic-bezier(0.4, 0 , 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  }
});
