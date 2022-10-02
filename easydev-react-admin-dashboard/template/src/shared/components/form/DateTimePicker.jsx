import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

const DateTimePickerField = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <div className="date-picker">
      <DatePicker
        timeFormat="HH:mm"
        className="form__form-group-datepicker"
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        dropDownMode="select"
        withPortal={isMobileOnly}
      />
    </div>
  );
};

DateTimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default renderComponentField(DateTimePickerField);
