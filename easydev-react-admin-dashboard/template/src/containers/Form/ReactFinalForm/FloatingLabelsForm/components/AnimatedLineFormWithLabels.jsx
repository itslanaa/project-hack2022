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
  input, label, meta: { touched, error }, children, select, multiline,
}) => (
  <TextField
    className="material-form__field"
    label={label}
    type={input.type}
    error={touched && error}
    value={input.value}
    select={select}
    multiline={multiline}
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
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.node,
  multiline: PropTypes.bool,
};

renderTextField.defaultProps = {
  meta: null,
  select: false,
  children: [],
  multiline: false,
};

const AnimatedLineFormWithLabels = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.floating_labels_form.animated_line_inputs')}</h5>
            <h5 className="subhead">Material fields with a property <span className="red-text">label</span></h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="material-form" onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="username"
                    component={renderTextField}
                    placeholder="Name"
                    label="Username"
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    component={renderTextField}
                    placeholder="example@mail.com"
                    type="email"
                    label="Email"
                  />
                </div>
                <div>
                  <Field
                    name="url"
                    component={renderTextField}
                    placeholder="https://themeforest.net"
                    label="URL"
                    type="url"
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    component={renderTextField}
                    type="password"
                    label="Password"
                  />
                </div>
                <div>
                  <Field
                    name="select"
                    component={renderTextField}
                    select
                    label="Select Option"
                  >
                    <MenuItem className="material-form__option" value="one">One</MenuItem>
                    <MenuItem className="material-form__option" value="two">Two</MenuItem>
                  </Field>
                </div>
                <div>
                  <Field
                    name="textarea"
                    component={renderTextField}
                    placeholder="Type message here"
                    multiline
                    rowsMax="4"
                    label="Text Area"
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

AnimatedLineFormWithLabels.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AnimatedLineFormWithLabels;
