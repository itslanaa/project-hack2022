import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';
import PasswordField from '@/shared/components/form/Password';
import FormField from '@/shared/components/form/FormField';
import validate from './validate';

const VerticalForm = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.from_validation.vertical_form_validate_two')}</h5>
            <h5 className="subhead">Errors are above fields, use class super
              <span className="red-text"> form__form-group-input-wrap--error-above</span>
            </h5>
          </div>
          <Form onSubmit={onSubmit} validate={validate}>
            {({ handleSubmit, form: { reset, pristine, submitting } }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Username</span>
                  <div className="form__form-group-field">
                    <Field
                      name="username"
                      component={FormField}
                      type="text"
                      placeholder="Name"
                      isAboveError
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">E-mail</span>
                  <div className="form__form-group-field">
                    <Field
                      name="email"
                      component={FormField}
                      type="email"
                      placeholder="example@mail.com"
                      isAboveError
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Url</span>
                  <div className="form__form-group-field">
                    <Field
                      name="url"
                      component={FormField}
                      type="url"
                      placeholder="https://themeforest.net"
                      isAboveError
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
                      isAboveError
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Select Option</span>
                  <div className="form__form-group-field">
                    <Field
                      name="select"
                      component={renderSelectField}
                      type="text"
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                      ]}
                      isAboveError
                    />
                  </div>
                </div>
                <ButtonToolbar className="form__button-toolbar">
                  <Button color="primary" type="submit">Validate</Button>
                  <Button type="button" onClick={reset} disabled={pristine || submitting}>
                    Cancel
                  </Button>
                </ButtonToolbar>
              </form>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

VerticalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default VerticalForm;
