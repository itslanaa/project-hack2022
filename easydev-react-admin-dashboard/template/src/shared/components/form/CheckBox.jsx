import React from 'react';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { renderComponentField } from '@/shared/components/form/FormField';

export const CheckBoxField = ({
  checked,
  onChange,
  name,
  label,
  disabled,
  className,
  color,
}) => {
  const CheckboxClass = classNames({
    'checkbox-btn': true,
    disabled,
  });
  return (
    <label
      className={`${CheckboxClass} ${className ? ` checkbox-btn--${className}` : ''}`}
      htmlFor={name}
    >
      <input
        className="checkbox-btn__checkbox"
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <span
        className="checkbox-btn__checkbox-custom"
        style={color ? { background: color, borderColor: color } : {}}
      >
        <CheckIcon />
      </span>
      {className === 'button'
        ? (
          <span className="checkbox-btn__label-svg">
            <CheckIcon className="checkbox-btn__label-check" />
            <CloseIcon className="checkbox-btn__label-uncheck" />
          </span>
        ) : ''}
      <span className="checkbox-btn__label">
        {label}
      </span>
    </label>
  );
};

CheckBoxField.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
};

CheckBoxField.defaultProps = {
  label: '',
  disabled: false,
  className: '',
  color: '',
};

export default renderComponentField(CheckBoxField);
