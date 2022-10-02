import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ResetPasswordForm from '@/shared/components/reset_password/ResetPasswordForm';
import fakeUsers from '../App/fakeUsers';

const ResetPassword = (props) => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(true);
  const onSubmit = ({ email }) => {
    if (fakeUsers.find(item => item.email === email)) {
      setMessage('Please, check your e-mail');
      setStatus(true);
    } else {
      setMessage('This e-mail does not exist');
      setStatus(false);
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
            <h4 className="account__subhead subhead">Password reset</h4>
          </div>
          <ResetPasswordForm
            {...props}
            message={message}
            status={status}
            onSubmit={onSubmit}
          />
          <div className="account__have-account">
            <p>Remember your password?  <NavLink to="/">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
