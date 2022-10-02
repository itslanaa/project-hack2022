import {
  AUTHENTICATE_LOGIN,
  AUTHENTICATE_ERROR_AUTH,
  AUTHENTICATE_LOGOUT,
} from '../actions/authActions';

const authDefaults = {
  loggedIn: false,
  fullName: '',
  avatar: '',
  error: '',
};

const storedState = localStorage.auth ? JSON.parse(localStorage.auth) : {};

const initialState = {
  loggedIn: storedState.loggedIn || authDefaults.loggedIn,
  fullName: storedState.fullName || authDefaults.fullName,
  avatar: storedState.avatar || authDefaults.avatar,
  error: authDefaults.error,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_LOGIN:
      return {
        ...state,
        loggedIn: true,
        fullName: action.fullName,
        avatar: action.avatar,
      };
    case AUTHENTICATE_ERROR_AUTH:
      return { ...state, error: action.error };
    case AUTHENTICATE_LOGOUT:
      return authDefaults;
    default:
      return state;
  }
};

export default authReducer;
