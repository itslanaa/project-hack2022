import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import googleAuthSetting from '@/config/google';
import { handleLogin, authError, getFakeToken } from '@/redux/actions/authActions';

const glLogin = {
  onSuccess: response => (dispatch) => {
    // In real project you will get the data below from backend api
    dispatch(handleLogin({
      fullName: response.profileObj.name,
      avatar: response.profileObj.imageUrl,
      token: getFakeToken(response.profileObj.id),
    }));
  },
  onFailure: response => (dispatch) => {
    dispatch(authError(response.error));
  },
};

const AuthGoogleBtn = ({ onSuccess, onFailure }) => (
  <GoogleLogin
    clientId={googleAuthSetting.client_id}
    render={renderProps => (
      <button
        onClick={renderProps.onClick}
        type="button"
        className="account__social-btn account__social-btn--google"
      >
        <GooglePlusIcon />
      </button>
    )}
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy="single_host_origin"
  />
);

AuthGoogleBtn.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default connect(null, glLogin)(AuthGoogleBtn);
