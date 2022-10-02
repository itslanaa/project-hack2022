import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Error from '@/shared/components/form/Error';

const FormField = ({
  input, meta: { touched, error }, component: Component, isAboveError, wrapperClassName, ...props
}) => (
  <div className={classNames(
    'form__form-group-input-wrap',
    { 'form__form-group-input-wrap--error-above': isAboveError },
    wrapperClassName,
    )}
  >
    <Component {...props} {...input} />
    {touched && error && <Error error={error} />}
  </div>
);

FormField.propTypes = {
  input: PropTypes.shape(),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  component: PropTypes.elementType,
  isAboveError: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};

FormField.defaultProps = {
  input: null,
  meta: {
    touched: false,
    error: '',
  },
  component: 'input',
  isAboveError: false,
  wrapperClassName: '',
};

export const renderComponentField = component => props => (<FormField component={component} {...props} />);

export default FormField;
