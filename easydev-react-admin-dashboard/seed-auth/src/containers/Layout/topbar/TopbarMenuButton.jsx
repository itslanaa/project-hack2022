import React from 'react';
import PropTypes from 'prop-types';

const TopbarMenuButton = ({ title, icon, onClick }) => (
  <button type="button" className="topbar__link" onClick={onClick}>
    <span className={`topbar__link-icon lnr lnr-${icon}`} />
    <p className="topbar__link-title">{title}</p>
  </button>
);

TopbarMenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TopbarMenuButton.defaultProps = {
  onClick: () => {},
};

export default TopbarMenuButton;
