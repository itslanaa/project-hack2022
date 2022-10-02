import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

export const MultiSelectField = React.forwardRef(({
  value, name, placeholder, options, onChange, ...other
}, ref) => {
  const handleChange = (handleChangeValue) => {
    onChange(handleChangeValue);
  };

  return (
    <Select
      isMulti
      name={name}
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      closeOnSelect={false}
      removeSelected={false}
      className="react-select"
      placeholder={placeholder}
      classNamePrefix="react-select"
      ref={ref}
      {...other}
    />
  );
});

MultiSelectField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })),
  ]),
};

MultiSelectField.defaultProps = {
  placeholder: '',
  onChange: () => {},
  options: [],
  value: '',
};

export default renderComponentField(MultiSelectField);
