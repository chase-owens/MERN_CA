import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'static-site-generator-webpack-plugin';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles/theme';
import { store } from './store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from './store/history';

// if (typeof document !== 'undefined') {
ReactDOM.render(
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('app')
);
// }

// module.exports = function render(locals, callback) {
//   const html = React.renderToStaticMarkup(React.createElement(App, locals));
//   callback(null, '<!DOCTYPE html>' + html);
// };
