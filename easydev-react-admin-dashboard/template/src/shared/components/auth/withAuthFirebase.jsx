import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth as authAction } from '@/redux/actions/authActions';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
} from 'firebase/auth';
import firebaseAuthSetting from '../../../config/firebase';
import ModalLoginForm from '../ModalLoginForm';

initializeApp(firebaseAuthSetting);
const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com').setCustomParameters({
  prompt: 'consent',
  tenant: firebaseAuthSetting.microsoftTenantId,
});
const signIn = async (provider = null, userProps = { name: '', password: '' }) => {
  if (provider) {
    return signInWithPopup(auth, provider);
  }
  return signInWithEmailAndPassword(auth, userProps.username, userProps.password);
};

const withAuthFirebase = (WrappedComponent) => {
  const HocAuth = (props) => {
    const { history, login } = props;
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
      setError('');
      setIsOpen(false);
    };

    const openModal = () => {
      setIsOpen(true);
      setError('');
    };

    const onLogin = (provider = null) => async (userProps) => {
      setError('');
      try {
        const { user } = await signIn(provider, userProps);
        const name = user.displayName ? user.displayName : user.email;
        const avatar = user.photoURL ? user.photoURL : '';
        login({ name, avatar });
        history.push('/app_dashboard');
      } catch (e) {
        setError(e.message);
      }
    };

    return (
      <div className="account">
        <ModalLoginForm
          title="Sign in with Firebase"
          isOpen={isOpen}
          error={error}
          form="log_in_modal"
          closeModal={closeModal}
          onLogin={onLogin()}
          onFacebookLogin={onLogin(facebookProvider)}
          onGoogleLogin={onLogin(googleProvider)}
          onMicrosoftLogin={onLogin(microsoftProvider)}
        />
        <WrappedComponent {...props} changeIsOpenModalFireBase={openModal} />
      </div>
    );
  };

  HocAuth.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    login: PropTypes.func.isRequired,
  };

  return connect(null, { login: authAction })(withRouter(HocAuth));
};

export default withAuthFirebase;
