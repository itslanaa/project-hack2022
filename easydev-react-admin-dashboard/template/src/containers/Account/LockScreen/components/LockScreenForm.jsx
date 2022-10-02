import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import PasswordField from '@/shared/components/form/Password';

const AccountForm = () => (
  <Form onSubmit={() => {}}>
    {({ handleSubmit }) => (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group form__form-group--forgot">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <Field
              name="password"
              component={PasswordField}
              placeholder="Password"
              keyIcon
            />
            <div className="account__forgot-password">
              <NavLink to="/reset_password">Forgot a password?</NavLink>
            </div>
          </div>
        </div>
        <NavLink className="btn btn-primary account__btn" to="/online_marketing_dashboard">Unlock</NavLink>
        <NavLink className="btn btn-outline-danger account__btn" to="/online_marketing_dashboard">Logout</NavLink>
      </form>
    )}
  </Form>
);

export default AccountForm;
