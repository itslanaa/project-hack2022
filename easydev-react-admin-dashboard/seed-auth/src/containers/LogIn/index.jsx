import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import fakeUsers from '../App/fakeUsers';
import { handleLogin, handleAuthError, getFakeToken } from '@/redux/actions/authActions';
import LogInForm from './components/LogInForm';
import GoogleAuthBtn from './components/AuthBtn/googleAuthBtn';
import FacebookAuthBtn from './components/AuthBtn/fbAuthBtn';
import MicrosoftAuthBtn from './components/AuthBtn/microsoftAuthBtn';
import withAuthFirebase from './components/auth/withAuthFirebase';
import { login as loginWithAuth0 } from './components/auth/withAuth0';

const auth0Icon = `${process.env.PUBLIC_URL}/img/auth0.svg`;

const LogIn = ({
  changeIsOpenModalFireBase,
  login,
  handleError,
  error,
}) => {
  const onSubmit = ({ name, password }) => {
    const user = fakeUsers.find(item => item.email === name && item.password === password);
    if (user) {
      login({ ...user, token: getFakeToken(user.email) });
    } else {
      handleError('Username or password is incorrect.');
    }
  };

  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Welcome to
              <span className="account__logo"> Easy
                <span className="account__logo-accent">DEV</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">Start your business easily</h4>
          </div>
          <LogInForm onSubmit={onSubmit} error={error} />
          <div className="account__or">
            <p>Or Easily Using</p>
          </div>
          <div className="account__social">
            <FacebookAuthBtn />
            <GoogleAuthBtn />
            <MicrosoftAuthBtn />
            <Button
              className="account__social-btn account__social-btn--firebase"
              onClick={changeIsOpenModalFireBase}
            >
              <FirebaseIcon />
            </Button>
            <Button className="account__social-btn account__social-btn--auth0" onClick={loginWithAuth0}>
              <img className="customizer__btn-icon" src={auth0Icon} alt="icon" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default withAuthFirebase(connect(state => ({
  error: state.auth.error,
}), { login: handleLogin, handleError: handleAuthError })(LogIn));
