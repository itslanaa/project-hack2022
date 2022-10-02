import React from 'react';
import PropTypes from 'prop-types';
import { BlocksShadowsProps } from '@/shared/prop-types/ReducerProps';

const ToggleShadow = ({ blocksShadows, changeBlocksShadowsOn, changeBlocksShadowsOff }) => (
  <label className="toggle-btn customizer__toggle" htmlFor="shadow_toggle">
    <input
      className="toggle-btn__input"
      type="checkbox"
      name="shadow_toggle"
      id="shadow_toggle"
      checked={blocksShadows.className === 'blocks-shadows-on'}
      onChange={blocksShadows.className === 'blocks-shadows-on'
        ? changeBlocksShadowsOff : changeBlocksShadowsOn}
    />
    <span className="toggle-btn__input-label" />
    <span>{'Block\'s Shadows'}</span>
  </label>
);

ToggleShadow.propTypes = {
  blocksShadows: BlocksShadowsProps.isRequired,
  changeBlocksShadowsOn: PropTypes.func.isRequired,
  changeBlocksShadowsOff: PropTypes.func.isRequired,
};

export default ToggleShadow;
