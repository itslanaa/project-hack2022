import createAuth0Client from '@auth0/auth0-spa-js';
import config from '../../../config/auth0';
import store from '../../../containers/App/store';
import { auth } from '../../../redux/actions/authActions';

let auth0 = null;

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
  });
};

const updateState = async () => {
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    // In real project you will get the data below from backend api
    const user = await auth0.getUser();
    store.dispatch(auth({
      name: user.name,
      avatar: user.picture,
    }));
  }
};

const initAuth0 = async () => {
  await configureClient();
  updateState();
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    return;
  }

  const query = window.location.search;

  if (query.includes('code=') && query.includes('state=')) {
    await auth0.handleRedirectCallback();
    updateState();
    window.history.replaceState({}, document.title, '/');
  }
};

export const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: config.redirectUri,
  });
};

export const logout = async () => {
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    auth0.logout({
      returnTo: config.returnTo,
    });
  }
};

export default initAuth0;
