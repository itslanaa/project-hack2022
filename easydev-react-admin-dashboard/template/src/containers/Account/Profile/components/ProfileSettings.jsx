import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  input, label, meta: { touched, error },
}) => (
  <TextField
    className="material-form__field"
    label={label}
    error={touched && error}
    value={input.value}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderTextField.defaultProps = {
  meta: null,
  label: '',
};

const ProfileSettings = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <form className="material-form" onSubmit={handleSubmit}>
        <div>
          <span className="material-form__label">Full Name</span>
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
          <Button color="primary" type="submit">Update profile</Button>
          <Button type="button" onClick={form.reset}>
            Cancel
          </Button>
        </ButtonToolbar>
      </form>
    )}
  </Form>
);

ProfileSettings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileSettings;
