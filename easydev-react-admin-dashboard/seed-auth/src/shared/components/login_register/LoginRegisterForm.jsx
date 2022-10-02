import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import { Button, Alert } from 'reactstrap';
import FormField from '@/shared/components/form/FormField';
import PasswordField from '@/shared/components/form/Password';

const validate = value => (value ? null : 'This field is required!');

const RegisterForm = ({ onSubmit, errorMessage }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className="form" onSubmit={handleSubmit}>
        <Alert
          className="w-100"
          color="danger"
          isOpen={!!errorMessage}
        >
          {errorMessage}
        </Alert>
        <div className="form__form-group">
          <span className="form__form-group-label">Username</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="username"
              component={FormField}
              type="text"
              placeholder="Name"
              className="input-without-border-radius"
              validate={validate}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">E-mail</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AlternateEmailIcon />
            </div>
            <Field
              name="email"
              component={FormField}
              type="email"
              placeholder="example@mail.com"
              className="input-without-border-radius"
              validate={validate}
            />
          </div>
        </div>
        <div className="form__form-group form__form-group--forgot">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <Field
              name="password"
              component={PasswordField}
              placeholder="Password"
              className="input-without-border-radius"
              validate={validate}
              keyIcon
            />
          </div>
        </div>
        <div className="account__btns register__btns">
          <Button type="submit" color="primary" className="account__btn">
            Sign Up
          </Button>
        </div>
      </form>
    )}
  </Form>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

RegisterForm.defaultProps = {
  errorMessage: '',
};

export default RegisterForm;
