import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from 'mdi-react/CheckIcon';

const ToDo = ({
  id, label, onChange, checked, disabled,
}) => (
  <div className="todo">
    <label
      className={!disabled ? 'checkbox-btn todo__checkbox' : 'todo__checkbox-disabled'}
      htmlFor={id}
    >
      <input
        className="checkbox-btn__checkbox"
        type="checkbox"
        name={id}
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <span className="checkbox-btn__checkbox-custom">
        <CheckIcon />
      </span>
      <span className="checkbox-btn__label todo__checkbox-label">{label}</span>
    </label>
  </div>
);

ToDo.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

ToDo.defaultProps = {
  label: '',
  onChange: () => {},
  checked: false,
  disabled: false,
};

export default ToDo;
