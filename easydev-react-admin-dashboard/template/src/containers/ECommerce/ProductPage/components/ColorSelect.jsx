import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SelectOption = ({
  innerProps, isDisabled, data,
}) => (!isDisabled ? (
  <div
    className="react-select__option"
    {...innerProps}
  >
    {data.label}
    <span
      className="react-select__color"
      style={{ backgroundColor: data.color }}
    />
  </div>
) : null);

SelectOption.propTypes = {
  isDisabled: PropTypes.bool,
  innerProps: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

SelectOption.defaultProps = {
  isDisabled: false,
};

const ColorSelect = ({ options, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      className="react-select"
      classNamePrefix="react-select"
      placeholder={placeholder}
      components={{ Option: SelectOption }}
    />
  );
};

ColorSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
  })),
  placeholder: PropTypes.string,
};

ColorSelect.defaultProps = {
  options: null,
  placeholder: 'Select...',
};

export default ColorSelect;
