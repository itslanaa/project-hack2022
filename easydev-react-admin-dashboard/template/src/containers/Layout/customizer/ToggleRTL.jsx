import React from 'react';
import PropTypes from 'prop-types';
import { RTLProps } from '@/shared/prop-types/ReducerProps';

const ToggleRTL = ({ rtl, changeToLTR, changeToRTL }) => (
  <label className="toggle-btn customizer__toggle" htmlFor="direction_toggle">
    <input
      className="toggle-btn__input"
      type="checkbox"
      name="direction_toggle"
      id="direction_toggle"
      checked={rtl.direction === 'rtl'}
      onChange={rtl.direction === 'rtl' ? changeToLTR : changeToRTL}
    />
    <span className="toggle-btn__input-label" />
    <span>RTL mode</span>
  </label>
);

ToggleRTL.propTypes = {
  rtl: RTLProps.isRequired,
  changeToRTL: PropTypes.func.isRequired,
  changeToLTR: PropTypes.func.isRequired,
};

export default ToggleRTL;
