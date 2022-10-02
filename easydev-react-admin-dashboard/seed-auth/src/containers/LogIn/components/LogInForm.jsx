import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Button, Alert } from 'reactstrap';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import PasswordField from '@/shared/components/form/Password';

const LogInForm = ({ onSubmit, error }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className="form" onSubmit={handleSubmit}>
        <Alert
          className="w-100"
          color="danger"
          isOpen={!!error}
        >
          {error}
        </Alert>

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
        <Button className="account__btn" type="submit" color="primary">Sign In</Button>
        <NavLink
          className="btn btn-outline-primary account__btn account__btn--small"
          to="/register"
        >Create Account
        </NavLink>
      </form>
    )}
  </Form>
);

LogInForm.propTypes = {
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

LogInForm.defaultProps = {
  error: '',
};

export default LogInForm;
