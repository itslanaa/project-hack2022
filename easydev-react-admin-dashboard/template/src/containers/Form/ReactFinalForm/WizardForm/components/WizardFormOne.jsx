import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import { Button, ButtonToolbar } from 'reactstrap';
import PasswordField from '@/shared/components/form/Password';

const WizardFormOne = ({ onSubmit, initialValues }) => (
  <Form onSubmit={onSubmit} initialValues={initialValues}>
    {({ handleSubmit }) => (
      <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
        <h3 className="wizard__title">Fill your personal data</h3>
        <div className="form__form-group">
          <span className="form__form-group-label">Username</span>
          <div className="form__form-group-field">
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">E-mail</span>
          <div className="form__form-group-field">
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="example@mail.com"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Url</span>
          <div className="form__form-group-field">
            <Field
              name="url"
              component="input"
              type="url"
              placeholder="https://themeforest.net"
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
            />
          </div>
        </div>
        <ButtonToolbar className="form__button-toolbar wizard__toolbar">
          <Button color="primary" type="button" disabled className="previous">Back</Button>
          <Button color="primary" type="submit" className="next">Next</Button>
        </ButtonToolbar>
      </form>
    )}
  </Form>
);

WizardFormOne.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}).isRequired,
};

export default WizardFormOne;
