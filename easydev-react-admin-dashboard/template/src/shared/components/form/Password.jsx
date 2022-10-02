import React, { useState } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import PropTypes from 'prop-types';
import FormField from './FormField';

const PasswordField = React.forwardRef(({
  input,
  keyIcon,
  ...props
}, ref) => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <>
      {keyIcon && (
        <div className="form__form-group-icon">
          <KeyVariantIcon />
        </div>
      )}
      <FormField
        {...props}
        {...input}
        type={passwordShown ? 'text' : 'password'}
        ref={ref}
      />
      <button
        className={`form__form-group-button${passwordShown ? ' active' : ''}`}
        type="button"
        onClick={() => setPasswordShown(shown => !shown)}
      ><EyeIcon />
      </button>
    </>
  );
});

PasswordField.propTypes = {
  input: PropTypes.shape().isRequired,
  keyIcon: PropTypes.bool,
};

PasswordField.defaultProps = {
  keyIcon: false,
};

export default PasswordField;
