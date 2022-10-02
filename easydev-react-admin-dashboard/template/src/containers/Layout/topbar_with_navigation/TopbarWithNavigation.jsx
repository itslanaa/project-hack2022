import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopbarLanguage from '../components/topbar/TopbarLanguage';
import TopbarMail from '../components/topbar/TopbarMail';
import TopbarProfile from '../components/topbar/TopbarProfile';
import TopbarNotification from '../components/topbar/TopbarNotification';
import TopbarSearch from '../components/topbar/TopbarSearch';
import TopbarSidebarButton from '../components/topbar/TopbarSidebarButton';
import TopbarNav from './tobar_nav/TopbarNav';

const TopbarWithNavigation = ({ changeMobileSidebarVisibility }) => (
  <div className="topbar topbar--navigation">
    <div className="topbar__left">
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeMobileSidebarVisibility}
      />
      <Link className="topbar__logo" to="/online_marketing_dashboard" />
    </div>
    <TopbarNav />
    <div className="topbar__right">
      <div className="topbar__right-search">
        <TopbarSearch />
      </div>
      <div className="topbar__right-over">
        <TopbarNotification />
        <TopbarMail new />
        <TopbarProfile />
        <TopbarLanguage />
      </div>
    </div>
  </div>
);

TopbarWithNavigation.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
};

export default TopbarWithNavigation;
