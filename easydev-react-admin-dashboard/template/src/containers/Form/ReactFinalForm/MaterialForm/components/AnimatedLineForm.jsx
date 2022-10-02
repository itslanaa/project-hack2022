import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const renderTextField = ({
  input, label, meta: { touched, error }, children, select,
}) => (
  <TextField
    className="material-form__field"
    label={label}
    error={touched && error}
    value={input.value}
    type={input.type}
    select={select}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  >
    {children}
  </TextField>
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.node,
};

renderTextField.defaultProps = {
  label: '',
  meta: null,
  select: false,
  children: [],
};

const AnimatedLine = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.material_from.animated_line')}</h5>
            <h5 className="subhead">Material design fields</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="material-form" onSubmit={handleSubmit}>
                <div>
                  <span className="material-form__label">Username</span>
                  <Field
                    name="username"
                    component={renderTextField}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <span className="material-form__label">Email</span>
                  <Field
                    name="email"
                    component={renderTextField}
                    placeholder="example@mail.com"
                    type="email"
                  />
                </div>
                <div>
                  <span className="material-form__label">URL</span>
                  <Field
                    name="url"
                    component={renderTextField}
                    placeholder="https://themeforest.net"
                    type="url"
                  />
                </div>
                <div>
                  <span className="material-form__label">Password</span>
                  <Field
                    name="password"
                    component={renderTextField}
                    type="password"
                  />
                </div>
                <div>
                  <span className="material-form__label">Select Option</span>
                  <Field
                    name="select"
                    component={renderTextField}
                    select
                  >
                    <MenuItem className="material-form__option" value="one">One</MenuItem>
                    <MenuItem className="material-form__option" value="two">Two</MenuItem>
                  </Field>
                </div>
                <div>
                  <span className="material-form__label">Text Area</span>
                  <Field
                    name="textarea"
                    component={renderTextField}
                    placeholder="Type message here"
                    multiline
                    rowsMax="4"
                  />
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

AnimatedLine.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AnimatedLine;
