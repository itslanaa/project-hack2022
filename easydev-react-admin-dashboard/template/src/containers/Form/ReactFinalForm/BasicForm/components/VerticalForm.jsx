import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import renderFileInputField from '@/shared/components/form/FileInput';
import PasswordField from '@/shared/components/form/Password';

const VerticalForm = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.basic_form.vertical_form')}</h5>
            <h5 className="subhead">Labels are above fields</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Default Label</span>
                  <div className="form__form-group-field">
                    <Field
                      name="defaultInput"
                      component="input"
                      type="text"
                      placeholder="Default Input"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Disabled Field</span>
                  <div className="form__form-group-field">
                    <Field
                      name="disableInput"
                      component="input"
                      type="text"
                      placeholder="Disabled Input"
                      disabled
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
                  <span className="form__form-group-label">Password</span>
                  <div className="form__form-group-field">
                    <Field
                      name="password"
                      component={PasswordField}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Icon Left</span>
                  <div className="form__form-group-field">
                    <div className="form__form-group-icon">
                      <EmailIcon />
                    </div>
                    <Field
                      name="leftIcon"
                      component="input"
                      type="email"
                      placeholder="Icon Left Input"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Icon Right</span>
                  <div className="form__form-group-field">
                    <Field
                      name="rightIcon"
                      component="input"
                      type="text"
                      placeholder="Icon Right Input"
                    />
                    <div className="form__form-group-icon">
                      <AccountSearchIcon />
                    </div>
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">
                    Add file
                  </span>
                  <div className="form__form-group-field">
                    <Field
                      name="fileVertical"
                      component={renderFileInputField}
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

VerticalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default VerticalForm;
