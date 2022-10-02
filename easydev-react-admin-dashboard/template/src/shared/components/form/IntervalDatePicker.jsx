import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import MinusIcon from 'mdi-react/MinusIcon';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

const IntervalDatePickerField = ({ onChange }) => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
  });

  const handleChange = ({ startDate, endDate }) => {
    const { startDate: stateStartDate, endDate: stateEndDate } = state;

    const startDateCopy = startDate || stateStartDate;
    const endDateCopy = endDate || stateEndDate;

    setState({ startDate: startDateCopy, endDate: endDateCopy });
    onChange({ start: startDateCopy, end: endDateCopy });
  };

  const handleChangeStart = startDate => handleChange({ startDate });
  const handleChangeEnd = endDate => handleChange({ endDate });

  const { startDate, endDate } = state;
  return (
    <div className="date-picker date-picker--interval">
      <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={handleChangeStart}
        dateFormat="yyyy/MM/dd"
        placeholderText="From"
        dropDownMode="select"
        withPortal={isMobileOnly}
      />
      <MinusIcon className="date-picker__svg" />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        onChange={handleChangeEnd}
        dateFormat="yyyy/MM/dd"
        placeholderText="To"
        dropDownMode="select"
        withPortal={isMobileOnly}
      />
    </div>
  );
};

IntervalDatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default renderComponentField(IntervalDatePickerField);
