import React from 'react';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { renderComponentField } from '@/shared/components/form/FormField';

const RadioButtonField = ({
  onChange,
  radioValue,
  className,
  disabled,
  label,
  name,
  value,
}) => {
  const RadioButtonClass = classNames({
    'radio-btn': true,
    disabled,
  });
  const handleChange = () => {
    onChange(radioValue);
  };
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label
      className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}
    >
      <input
        className="radio-btn__radio"
        name={name}
        type="radio"
        onChange={handleChange}
        checked={value === radioValue}
        disabled={disabled}
      />
      <span className="radio-btn__radio-custom" />
      {className === 'button'
        ? (
          <span className="radio-btn__label-svg">
            <CheckIcon className="radio-btn__label-check" />
            <CloseIcon className="radio-btn__label-uncheck" />
          </span>
        ) : ''}
      <span className="radio-btn__label">{label}</span>
    </label>
  );
};

RadioButtonField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  disabled: PropTypes.bool,
  radioValue: PropTypes.string,
  className: PropTypes.string,
};

RadioButtonField.defaultProps = {
  label: '',
  disabled: false,
  radioValue: '',
  className: '',
};

export default renderComponentField(RadioButtonField);
