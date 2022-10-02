import React from 'react';
import PropTypes from 'prop-types';
import { RoundBordersProps } from '@/shared/prop-types/ReducerProps';

const ToggleRoundBorders = ({ roundBorders, changeRoundBordersOn, changeRoundBordersOff }) => (
  <label className="toggle-btn customizer__toggle" htmlFor="square_toggle">
    <input
      className="toggle-btn__input"
      type="checkbox"
      name="square_toggle"
      id="square_toggle"
      checked={roundBorders.className === 'round-borders-on'}
      onChange={roundBorders.className === 'round-borders-on'
        ? changeRoundBordersOff : changeRoundBordersOn}
    />
    <span className="toggle-btn__input-label" />
    <span>Round Borders</span>
  </label>
);

ToggleRoundBorders.propTypes = {
  roundBorders: RoundBordersProps.isRequired,
  changeRoundBordersOn: PropTypes.func.isRequired,
  changeRoundBordersOff: PropTypes.func.isRequired,
};

export default ToggleRoundBorders;
