import React from 'react';
import PropTypes from 'prop-types';

const TopbarNavCategory = ({
  title, icon, isNew, children,
}) => (
  <div className="topbar__category-wrap">
    <div className="topbar__link topbar__category">
      {icon ? <span className={`topbar__link-icon lnr lnr-${icon}`} /> : ''}
      <p className="topbar__link-title">
        {title}
        {isNew && <span className="sidebar__category-new" />}
        <span className="topbar__category-icon lnr lnr-chevron-right" />
      </p>
    </div>
    <div className="topbar__submenu">
      {children}
    </div>
  </div>
);

TopbarNavCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isNew: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TopbarNavCategory.defaultProps = {
  isNew: false,
  icon: '',
};

export default TopbarNavCategory;
