import React from 'react';
import PropTypes from 'prop-types';

const ReactTableCustomizerToggle = ({
  text, isChecked, handleClick, isDisabled,
}) => (
  <label
    className={!isDisabled ? 'toggle-btn table__toggle' : 'toggle-btn table__toggle--disabled'}
    htmlFor={`${text}_toggle`}
  >
    <input
      className="toggle-btn__input"
      type="checkbox"
      name={`${text}_toggle`}
      id={`${text}_toggle`}
      checked={isChecked}
      onChange={handleClick}
      disabled={isDisabled}
    />
    <span className="toggle-btn__input-label table__toggle" />
    <span className="pagination__item pagination-info">{text}</span>
  </label>
);

ReactTableCustomizerToggle.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
};

ReactTableCustomizerToggle.defaultProps = {
  isDisabled: false,
};

export default ReactTableCustomizerToggle;
