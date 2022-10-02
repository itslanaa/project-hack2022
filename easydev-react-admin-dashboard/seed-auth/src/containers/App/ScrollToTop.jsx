import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    if (location && location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return children;
};

ScrollToTop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(ScrollToTop);
