export const AUTHENTICATE_LOGIN = 'AUTHENTICATE_LOGIN';
export const AUTHENTICATE_ERROR_AUTH = 'AUTHENTICATE_ERROR_AUTH';
export const AUTHENTICATE_LOGOUT = 'AUTHENTICATE_LOGOUT';

export function login({ fullName, avatar }) {
  return {
    type: AUTHENTICATE_LOGIN,
    fullName,
    avatar,
  };
}

export function authError(error) {
  return {
    type: AUTHENTICATE_ERROR_AUTH,
    error,
  };
}

export function logout() {
  return { type: AUTHENTICATE_LOGOUT };
}

export const handleLogout = () => (dispatch) => {
  localStorage.clear();
  sessionStorage.clear();
  dispatch(logout());
};

export const handleLogin = ({ fullName, avatar, token }) => (dispatch) => {
  dispatch(login({ fullName, avatar }));
  localStorage.auth = JSON.stringify({
    loggedIn: true,
    fullName,
    avatar,
    token,
  });
};

export const handleAuthError = error => (dispatch) => {
  dispatch(authError(error));
};

export const getFakeToken = id => `fake-jwt-token.${btoa(id)}`;
