import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import classNames from 'classnames';

const SidebarCategory = ({
  title, icon, isNew, children, sidebarCollapse,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const categoryClass = classNames({
    'sidebar__category-wrap': true,
    'sidebar__category-wrap--open': isOpen,
  });

  return (
    <div className={categoryClass}>
      <button className="sidebar__link sidebar__category" type="button" onClick={() => setIsOpen(prev => !prev)}>
        {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
        <p className="sidebar__link-title">{title}
          {isNew && <span className="sidebar__category-new" />}
        </p>
        <span className="sidebar__category-icon lnr lnr-chevron-right" />
      </button>
      <Collapse isOpen={sidebarCollapse || isOpen} className="sidebar__submenu-wrap">
        <ul className="sidebar__submenu">
          <div>
            {children}
          </div>
        </ul>
      </Collapse>
    </div>
  );
};

SidebarCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  sidebarCollapse: PropTypes.bool.isRequired,
  isNew: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SidebarCategory.defaultProps = {
  icon: '',
  isNew: false,
};

export default SidebarCategory;
