import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import 'bootstrap/dist/css/bootstrap.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../../scss/app.scss';
import { LoadScript } from '@react-google-maps/api';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';
import { config as i18nextConfig } from '../../translations';
import initAuth0 from '../../shared/components/auth/withAuth0';

i18n.init(i18nextConfig);

const ThemeComponent = ({ children, themeName }) => {
  const theme = createMuiTheme({
    palette: {
      type: themeName === 'theme-dark' ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.node.isRequired,
  themeName: PropTypes.string.isRequired,
};

const ConnectedThemeComponent = connect(state => ({ themeName: state.theme.className }))(ThemeComponent);

const App = () => {
  useEffect(() => {
    window.addEventListener('load', initAuth0);
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter basename="/easydev">
        <I18nextProvider i18n={i18n}>
          <LoadScript
            googleMapsApiKey="" /* Paste your Google Maps Api Key here */
          >
            <ScrollToTop>
              <ConnectedThemeComponent>
                <Router />
              </ConnectedThemeComponent>
            </ScrollToTop>
          </LoadScript>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
