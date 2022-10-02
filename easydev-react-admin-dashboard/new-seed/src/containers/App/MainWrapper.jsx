import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThemeProps, RTLProps } from '@/shared/prop-types/ReducerProps';

const MainWrapper = ({
  theme, children, rtl, location,
}) => {
  const direction = location.pathname === '/' ? 'ltr' : rtl.direction;

  return (
    <div className={`${theme.className} ${direction}-support`} dir={direction}>
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
};

MainWrapper.propTypes = {
  theme: ThemeProps.isRequired,
  rtl: RTLProps.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(connect(state => ({
  theme: state.theme,
  rtl: state.rtl,
}))(MainWrapper));
