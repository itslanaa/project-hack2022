import React from 'react';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

export const FileInputField = React.forwardRef(({ onChange, name, value }, ref) => {
  const handleChange = (e) => {
    e.preventDefault();
    const files = [...e.target.files];
    onChange({ file: files[0], name: files[0].name });
  };

  return (
    <div className="form__form-group-file">
      <label htmlFor={name}>Choose the file</label>
      {value && <span>{value.name}</span>}
      <input
        type="file"
        name={name}
        id={name}
        onChange={handleChange}
        ref={ref}
      />
    </div>
  );
});

FileInputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string,
    }),
    PropTypes.string,
  ]),
};

FileInputField.defaultProps = {
  value: null,
};

export default renderComponentField(FileInputField);
