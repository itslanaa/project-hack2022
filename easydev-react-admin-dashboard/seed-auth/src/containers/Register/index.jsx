import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogin, getFakeToken } from '@/redux/actions/authActions';
import RegisterForm from '@/shared/components/login_register/LoginRegisterForm';
import fakeUsers from '../App/fakeUsers';

const Register = ({ login }) => {
  const [error, setError] = useState('');
  const register = ({ username, email }) => {
    const user = fakeUsers.find(item => item.email === email);
    if (user) {
      setError('The email address is already in use by another account.');
    } else {
      login({
        fullName: username,
        avatar: `${process.env.PUBLIC_URL}/img/ava.png`,
        token: getFakeToken(email),
      });
      setError('');
    }
  };

  return (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Welcome to
              <span className="account__logo"> Easy
                <span className="account__logo-accent">DEV</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">Create an account</h4>
          </div>
          <RegisterForm onSubmit={register} errorMessage={error} />
          <div className="account__have-account">
            <p>Already have an account? <NavLink to="/">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login: handleLogin })(Register);
