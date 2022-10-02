import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const icon = `${process.env.PUBLIC_URL}/img/burger.svg`;

const Button = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={classnames('topbar__button', className)}
    type="button"
  >
    <img src={icon} alt="" className="topbar__button-icon" />
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const TopbarSidebarButton = ({ onClickDesktop, onClickMobile }) => (
  <div>
    <Button onClick={onClickDesktop} className="topbar__button--desktop" />
    <Button onClick={onClickMobile} className="topbar__button--mobile" />
  </div>
);

TopbarSidebarButton.propTypes = {
  onClickDesktop: PropTypes.func.isRequired,
  onClickMobile: PropTypes.func.isRequired,
};

export default TopbarSidebarButton;
