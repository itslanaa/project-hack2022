import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import { UserProps } from '@/shared/prop-types/ReducerProps';
import { logout as logoutAuth0 } from '@/shared/components/auth/withAuth0';
import TopbarMenuLink from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = ({ user }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logout = () => {
    localStorage.removeItem('easydev');
    logoutAuth0();
  };

  return (
    <div className="topbar__profile">
      <button className="topbar__avatar" type="button" onClick={toggleProfile}>
        <img
          className="topbar__avatar-img"
          src={(user && user.avatar) || Ava}
          alt="avatar"
        />
        <p className="topbar__avatar-name">
          {user && user.fullName}
        </p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          className="topbar__back"
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink
            title="My Profile"
            icon="user"
            path="/account/profile"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Calendar"
            icon="calendar-full"
            path="/default_pages/calendar"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Tasks"
            icon="list"
            path="/todo"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Inbox"
            icon="inbox"
            path="/mail"
            onClick={toggleProfile}
          />
          <div className="topbar__menu-divider" />
          <TopbarMenuLink
            title="Account Settings"
            icon="cog"
            path="/account/profile"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Lock Screen"
            icon="lock"
            path="/lock_screen"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Log Out"
            icon="exit"
            path="/log_in"
            onClick={logout}
          />
        </div>
      </Collapse>
    </div>
  );
};

TopbarProfile.propTypes = {
  user: UserProps.isRequired,
};

export default connect(state => ({
  user: state.user,
}))(TopbarProfile);
