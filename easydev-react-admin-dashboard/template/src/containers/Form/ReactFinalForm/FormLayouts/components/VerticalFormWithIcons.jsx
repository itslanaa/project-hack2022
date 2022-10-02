import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import WebIcon from 'mdi-react/WebIcon';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import PasswordField from '@/shared/components/form/Password';

const VerticalFormWithIcons = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.form_layouts.vertical_form_with_icons')}</h5>
            <h5 className="subhead">Labels are above fields and icons</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Username</span>
                  <div className="form__form-group-field">
                    <div className="form__form-group-icon">
                      <AccountOutlineIcon />
                    </div>
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
                    <div className="form__form-group-icon">
                      <AlternateEmailIcon />
                    </div>
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
                    <div className="form__form-group-icon">
                      <WebIcon />
                    </div>
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
                      keyIcon
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Field
                      name="remember_me_vertical_icons"
                      component={renderCheckBoxField}
                      label="Remember me"
                      type="checkbox"
                    />
                  </div>
                </div>
                <ButtonToolbar className="form__button-toolbar">
                  <Button color="primary" type="submit">Submit</Button>
                  <Button type="button" onClick={form.reset}>
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

VerticalFormWithIcons.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default VerticalFormWithIcons;
