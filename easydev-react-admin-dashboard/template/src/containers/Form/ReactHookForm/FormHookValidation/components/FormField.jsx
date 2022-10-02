import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

export const FormField = ({
    name,
    errors,
    control,
    component: Component,
    isAboveError,
    defaultValue,
    rules,
    ...other
  }) => (
    <div className={`form__form-group-input-wrap ${isAboveError ? 'form__form-group-input-wrap--error-above' : ''}`}>
      <Controller
        name={name}
        render={({ field }) => <Component {...field} {...other} />}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
      />
      {errors?.[name] && <span className="form__form-group-error">{errors[name].message}</span>}
    </div>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })]).isRequired,
  isAboveError: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.elementType]),
  rules: PropTypes.shape({}),
};

FormField.defaultProps = {
  errors: null,
  isAboveError: false,
  component: 'input',
  rules: {},
};

export default FormField;
