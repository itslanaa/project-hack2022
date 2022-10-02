import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { NavLink } from 'react-router-dom';
import { Alert, Button } from 'reactstrap';
import PasswordField from '@/shared/components/form/Password';
import renderCheckBoxField from '../form/CheckBox';

const LogInFormPhoto = ({
  onSubmit, errorMessage, errorMsg, fieldUser, typeFieldUser, form,
}) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className="form login-form" onSubmit={handleSubmit}>
        <Alert color="danger" isOpen={!!errorMessage || !!errorMsg}>
          {errorMessage}
          {errorMsg}
        </Alert>
        <div className="form__form-group">
          <span className="form__form-group-label">{fieldUser}</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="username"
              component="input"
              type={typeFieldUser}
              placeholder={fieldUser}
              className="input-without-border-radius"
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
              <NavLink to="/reset_password_photo">Forgot a password?</NavLink>
            </div>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group form__form-group-field">
            <Field
              name="remember_me"
              component={renderCheckBoxField}
              label="Remember me"
              type="checkbox"
            />
          </div>
        </div>
        <div className="account__btns">
          {form === 'modal_login'
            ? <Button className="account__btn" submit="true" color="primary">Sign In</Button>
            : (
              <NavLink className="account__btn btn btn-primary" to="/online_marketing_dashboard">
                Sign In
              </NavLink>
            )}
          <NavLink className="btn btn-outline-primary account__btn" to="/register_photo">Create
            Account
          </NavLink>
        </div>
      </form>
    )}
  </Form>
);

LogInFormPhoto.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorMsg: PropTypes.string,
  fieldUser: PropTypes.string,
  typeFieldUser: PropTypes.string,
  form: PropTypes.string.isRequired,
};

LogInFormPhoto.defaultProps = {
  errorMessage: '',
  errorMsg: '',
  fieldUser: 'Username',
  typeFieldUser: 'text',
};

export default connect(state => ({
  errorMsg: state.user.error,
}))(LogInFormPhoto);
