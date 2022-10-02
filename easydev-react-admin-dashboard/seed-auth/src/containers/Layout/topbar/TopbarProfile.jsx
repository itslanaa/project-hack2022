import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopbarMenuLink from './TopbarMenuLink';
import TopbarMenuButton from './TopbarMenuButton';
import { logout } from '@/containers/LogIn/components/auth/withAuth0';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = ({ fullName, avatar }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="topbar__profile">
      <button type="button" className="topbar__avatar" onClick={handleToggleCollapse}>
        <img className="topbar__avatar-img" src={avatar || Ava} alt="avatar" />
        <p className="topbar__avatar-name">{fullName}</p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          type="button"
          aria-label="button collapse"
          className="topbar__back"
          onClick={handleToggleCollapse}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink title="Page one" icon="list" path="/pages/one" />
          <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two" />
          <div className="topbar__menu-divider" />
          <TopbarMenuButton title="Log Out" icon="exit" onClick={logout} />
        </div>
      </Collapse>
    </div>
  );
};

TopbarProfile.propTypes = {
  fullName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default connect(state => ({
  fullName: state.auth.fullName,
  avatar: state.auth.avatar,
}))(TopbarProfile);
