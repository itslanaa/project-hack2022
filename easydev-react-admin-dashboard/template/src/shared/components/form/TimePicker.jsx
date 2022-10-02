import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimePicker from 'rc-time-picker';
import AvTimerIcon from 'mdi-react/AvTimerIcon';
import classNames from 'classnames';
import { renderComponentField } from '@/shared/components/form/FormField';

const TimePickerField = ({
  name, onChange, timeMode, theme,
}) => {
  const [opened, setOpened] = useState(false);
  const btnClass = classNames({
    'form__form-group-button': true,
    active: opened,
  });

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div className="form__form-group-field">
      <TimePicker
        open={opened}
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        name={name}
        onChange={onChange}
        showSecond={false}
        popupClassName={theme === 'theme-dark' ? 'theme-dark' : 'theme-light'}
        use12Hours={timeMode}
      />
      <button
        className={btnClass}
        type="button"
        onClick={() => {
          toggleOpen();
        }}
      >
        <AvTimerIcon />
      </button>
    </div>
  );
};

TimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
  timeMode: PropTypes.bool,
};

TimePickerField.defaultProps = {
  theme: 'theme-light',
  timeMode: false,
};

export default renderComponentField(TimePickerField);
