import React from 'react';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

export const ToggleButtonField = React.forwardRef(({
  onChange, name, disabled, value,
}, ref) => (
  <div className="toggle-btn">
    <input
      className="toggle-btn__input"
      type="checkbox"
      name={name}
      onChange={onChange}
      checked={value}
      disabled={disabled}
      ref={ref}
    />
    <button
      type="button"
      className="toggle-btn__input-label"
      onClick={() => onChange(!value)}
    >Toggle
    </button>
  </div>
));

ToggleButtonField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};

ToggleButtonField.defaultProps = {
  disabled: false,
};

export default renderComponentField(ToggleButtonField);
