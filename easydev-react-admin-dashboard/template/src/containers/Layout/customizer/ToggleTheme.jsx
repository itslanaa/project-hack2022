import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProps } from '@/shared/prop-types/ReducerProps';

const ToggleTheme = ({ theme, changeToLight, changeToDark }) => (
  <label className="toggle-btn customizer__toggle" htmlFor="theme_toggle">
    <input
      className="toggle-btn__input"
      type="checkbox"
      name="theme_toggle"
      id="theme_toggle"
      checked={theme.className === 'theme-dark'}
      onChange={theme.className === 'theme-dark' ? changeToLight : changeToDark}
    />
    <span className="toggle-btn__input-label" />
    <span>Dark Theme</span>
  </label>
);

ToggleTheme.propTypes = {
  theme: ThemeProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
};

export default ToggleTheme;
