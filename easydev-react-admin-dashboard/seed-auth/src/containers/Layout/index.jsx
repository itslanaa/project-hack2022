import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import { changeThemeToDark, changeThemeToLight } from '@/redux/actions/themeActions';
import { changeMobileSidebarVisibility, changeSidebarVisibility } from '@/redux/actions/sidebarActions';
import { SidebarProps } from '@/shared/prop-types/ReducerProps';

const Layout = ({ dispatch, sidebar }) => {
  const layoutClass = classNames({
    layout: true,
    'layout--collapse': sidebar.collapse,
  });

  const sidebarVisibility = () => {
    dispatch(changeSidebarVisibility());
  };

  const mobileSidebarVisibility = () => {
    dispatch(changeMobileSidebarVisibility());
  };

  const changeToDark = () => {
    dispatch(changeThemeToDark());
  };

  const changeToLight = () => {
    dispatch(changeThemeToLight());
  };

  return (
    <div className={layoutClass}>
      <Topbar
        changeMobileSidebarVisibility={mobileSidebarVisibility}
        changeSidebarVisibility={sidebarVisibility}
      />
      <Sidebar
        sidebar={sidebar}
        changeToDark={changeToDark}
        changeToLight={changeToLight}
        changeMobileSidebarVisibility={mobileSidebarVisibility}
      />
    </div>
  );
};

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sidebar: SidebarProps.isRequired,
};

export default withRouter(connect(state => ({
  sidebar: state.sidebar,
}))(Layout));
