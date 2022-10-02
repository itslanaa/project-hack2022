import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick,
  changeToDark,
  changeToLight,
  sidebarCollapse,
}) => (
  <div className="sidebar__content">
    <ul className="sidebar__block">
      <SidebarLink title="Log In" icon="exit" route="/log_in" onClick={onClick} />
      <SidebarCategory title="Layout" icon="layers" sidebarCollapse={sidebarCollapse}>
        <button type="button" className="sidebar__link" onClick={changeToLight}>
          <p className="sidebar__link-title">Light Theme</p>
        </button>
        <button type="button" className="sidebar__link" onClick={changeToDark}>
          <p className="sidebar__link-title">Dark Theme</p>
        </button>
      </SidebarCategory>
    </ul>
    <ul className="sidebar__block">
      <SidebarCategory title="Example Pages" icon="diamond" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Page one" route="/pages/one" onClick={onClick} />
        <SidebarLink title="Page two" route="/pages/two" onClick={onClick} />
        <SidebarCategory title="Example Subpages" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Subpage one" route="/" onClick={onClick} />
          <SidebarLink title="Subpage two" route="/" onClick={onClick} />
        </SidebarCategory>
      </SidebarCategory>
    </ul>
  </div>
);

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
};

export default SidebarContent;
