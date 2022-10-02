import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const DatepickerField = ({ name, ...props }) => {
  const [startDate, setStartDate] = useState(new Date());
  const onDateChange = date => setStartDate(date);

  return (
    <div className="datepicker-wrapper">
      {name && <p>{name}</p>}
      <DatePicker
        className="date-picker"
        selected={startDate}
        onChange={onDateChange}
        {...props}
      />
    </div>
  );
};

DatepickerField.propTypes = {
  name: PropTypes.string,
};

DatepickerField.defaultProps = {
  name: null,
};

export default DatepickerField;
