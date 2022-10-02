import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import { auth, authError } from '@/redux/actions/authActions';
import googleAuthSetting from '../../../config/google';

const AuthGoogleBtn = ({ dispatch, history }) => {
  const { t } = useTranslation('errors');
  const responseSuccess = (response) => {
    dispatch(auth({ name: response.profileObj.name, avatar: response.profileObj.imageUrl }));
    localStorage.setItem('easydev', response.accessToken);
    history.push('/online_marketing_dashboard');
  };

  const responseError = (response) => {
    console.trace();
    dispatch(authError(t(response.error)));
  };

  return (
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
      onSuccess={responseSuccess}
      onFailure={responseError}
      cookiePolicy="single_host_origin"
    />
  );
};

AuthGoogleBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect()(AuthGoogleBtn));
