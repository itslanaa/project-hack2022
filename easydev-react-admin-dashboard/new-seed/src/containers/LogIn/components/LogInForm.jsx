import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import PasswordField from '@/shared/components/form/Password';

const LogInForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Username</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <Field
              name="password"
              component={PasswordField}
              placeholder="Password"
              className="input-without-border-radius"
              keyIcon
            />
            <div className="account__forgot-password">
              <NavLink to="/reset_password">Forgot a password?</NavLink>
            </div>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Field
              name="remember_me"
              component={renderCheckBoxField}
              label="Remember me"
              type="checkbox"
            />
          </div>
        </div>
        <NavLink className="btn btn-primary account__btn account__btn--small" to="/pages/one">
          Sign In
        </NavLink>
        <NavLink className="btn btn-outline-primary account__btn account__btn--small" to="/pages/one">
          Create Account
        </NavLink>
      </form>
    )}
  </Form>
);

LogInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LogInForm;
