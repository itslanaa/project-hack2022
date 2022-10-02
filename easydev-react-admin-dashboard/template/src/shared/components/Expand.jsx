import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import LoadingIcon from 'mdi-react/LoadingIcon';
import classNames from 'classnames';

const Expand = ({ color, outline, title }) => {
  const [load, setLoad] = useState(false);

  const onLoad = () => {
    setLoad(true);
  };
  const request = () => {
    // your async logic here
    setTimeout(() => setLoad(false), 5000);
  };
  useEffect(() => {
    if (load) {
      request();
    }
  }, [load]);

  const expandClass = classNames({
    icon: true,
    expand: true,
    'expand--load': load,
  });

  return (
    <Button
      onClick={onLoad}
      className={expandClass}
      color={color}
      outline={outline}
    >
      <p><LoadingIcon /> {title}</p>
    </Button>
  );
};

Expand.propTypes = {
  title: PropTypes.string,
  outline: PropTypes.bool,
  color: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
  outline: false,
  color: 'secondary',
};

export default Expand;
