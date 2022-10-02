import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MicrosoftOfficeIcon from 'mdi-react/MicrosoftOfficeIcon';
import { auth, authError } from '@/redux/actions/authActions';
import { PublicClientApplication } from '@azure/msal-browser';
import microsoftAuthSettings from '../../../config/microsoft';

const MicrosoftAuthBtn = ({ dispatch, history }) => {
  const msalInstance = new PublicClientApplication(microsoftAuthSettings);

  const onClick = async () => {
    try {
      const { account: { username }, accessToken } = await msalInstance.loginPopup({
          redirectUri: microsoftAuthSettings.redirectUri,
      });
      dispatch(auth({ name: username }));
      localStorage.setItem('easydev', accessToken);
      history.push('/online_marketing_dashboard');
    } catch (e) {
      dispatch(authError(e.message));
    }
  };

  return (
    <button
      type="button"
      className="account__social-btn account__social-btn--office"
      onClick={onClick}
    >
      <MicrosoftOfficeIcon />
    </button>
  );
};

MicrosoftAuthBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect()(MicrosoftAuthBtn));
