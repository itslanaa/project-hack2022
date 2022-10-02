import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from 'mdi-react/CheckIcon';

const ProfileToDo = ({
  id, label, onChange, checked, disabled,
}) => (
  <div className={!disabled ? 'profile__current-task' : 'profile__current-task profile__current-task--disabled'}>
    <label
      className={!disabled ? 'checkbox-btn profile__current-task-checkbox' : 'profile__current-task-checkbox-disabled'}
      htmlFor={id}
    >
      <input
        id={id}
        className="checkbox-btn__checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox-btn__checkbox-custom">
        <CheckIcon />
      </span>
    </label>
    <span>{label}</span>
  </div>
);

ProfileToDo.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

ProfileToDo.defaultProps = {
  label: '',
  onChange: () => {},
  checked: false,
  disabled: false,
};

export default ProfileToDo;
