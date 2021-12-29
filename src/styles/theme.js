import { createTheme } from "@material-ui/core/styles";

const initial = {
  primary: {
    main: "#29bbf6",
    dark: "#1c7fac",
    light: "#53c4f7",
    contrastText: "#000",
  },
  secondary: {
    main: "#9c27b0",
    dark: "#6d1b7b",
    light: "#af52bf",
    contrastText: "#fff",
  },
  ternary: {
    main: "#e91e63",
    dark: "#a31545",
    light: "#ed4b82",
    contrastText: "#fff",
  },
  text: {
    primary: "#151515",
    secondary: "#fff",
    main: "#282d45",
    light: "#fff",
    dark: "#151515",
  },
};

const easter = {
  primary: {
    main: "#a0c7d1",
    dark: "#84b3c0",
    light: "#e3eef1",
    contrastText: "#000",
  },
  secondary: {
    main: "#b081f0",
    dark: "#9764e9",
    light: "#e7d9fb",
    contrastText: "#fff",
  },
  ternary: {
    main: "#f081a0",
    dark: "#e91e63",
    light: "#fbd9e3",
    contrastText: "#fff",
  },
};

const caawt = {
  primary: {
    main: "#a0c7d1",
    dark: "#84b3c0",
    light: "#e3eef1",
    contrastText: "#000",
  },
  secondary: {
    main: "#92d3ca",
    dark: "#75c2b7",
    light: "#def2ef",
    contrastText: "#000",
  },
  ternary: {
    main: "#e2beb5",
    dark: "#d6a79d",
    light: "#f6ece9",
    contrastText: "#000",
  },
  text: {
    primary: "#151515",
    secondary: "#fff",
    main: "#282d45",
    light: "#fff",
    dark: "#151515",
  },
  warning: {
    main: "#e91e63",
    dark: "#a31545",
    light: "#ed4b82",
    contrastText: "#fff",
  },
};

export const theme = createTheme({
  palette: caawt,
  typography: {
    useNextVariants: true,
  },
  spacing: (unit) => unit * 8,
  breakpoints: {
    sm: 600,
    smmd: 768,
    lg: 1280,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0 , 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0 , 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0 , 1, 1)",
      sharp: "cubic-bezier(0.4, 0 , 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});
