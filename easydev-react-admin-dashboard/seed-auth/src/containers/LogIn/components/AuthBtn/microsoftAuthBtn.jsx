import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MicrosoftOfficeIcon from 'mdi-react/MicrosoftOfficeIcon';
import { PublicClientApplication } from '@azure/msal-browser';
import microsoftAuthSettings from '@/config/microsoft';
import { handleLogin, authError, getFakeToken } from '@/redux/actions/authActions';

const msalInstance = new PublicClientApplication(microsoftAuthSettings);
const msLogin = () => async (dispatch) => {
  try {
    const { account } = await msalInstance.loginPopup({
      redirectUri: microsoftAuthSettings.redirectUri,
    });
    // In real project you will get the data below from backend api
    dispatch(handleLogin({
      fullName: account.name ? account.name : account.username,
      avatar: '',
      token: getFakeToken(''),
    }));
  } catch (e) {
    dispatch(authError(e.message));
  }
};

const MicrosoftAuthBtn = ({ login }) => (
  <button
    type="button"
    className="account__social-btn account__social-btn--office"
    onClick={login}
  >
    <MicrosoftOfficeIcon />
  </button>
);

MicrosoftAuthBtn.propTypes = {
  login: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { login: msLogin })(MicrosoftAuthBtn));
