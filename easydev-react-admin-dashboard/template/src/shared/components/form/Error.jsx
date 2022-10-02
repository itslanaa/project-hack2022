import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (<span className="form__form-group-error">{error}</span>);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
