import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

const DatePickerField = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <div className="date-picker">
      <DatePicker
        className="form__form-group-datepicker"
        selected={startDate}
        onChange={handleChange}
        dateFormat="yyyy/MM/dd"
        dropDownMode="select"
        popperPlacement="center"
        withPortal={isMobileOnly}
      />
    </div>
  );
};

DatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default renderComponentField(DatePickerField);
