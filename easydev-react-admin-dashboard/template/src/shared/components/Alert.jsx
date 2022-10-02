import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import CommentAlertOutlineIcon from 'mdi-react/CommentAlertOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';

const AlertComponent = ({
  color, className, icon, children,
}) => {
  const [visible, setVisible] = useState(true);

  const onShow = () => {
    setVisible(true);
  };

  const onDismiss = () => {
    setVisible(false);
  };

  let Icon;

  switch (color) {
    case 'info':
      Icon = <InformationOutlineIcon />;
      break;
    case 'success':
      Icon = <ThumbUpOutlineIcon />;
      break;
    case 'warning':
      Icon = <CommentAlertOutlineIcon />;
      break;
    case 'danger':
      Icon = <CloseCircleOutlineIcon />;
      break;
    default:
      console.log('Wrong color!');
      break;
  }

  if (visible) {
    return (
      <Alert color={color} className={className} isOpen={visible}>
        {icon && <div className="alert__icon">{Icon}</div>}
        <button className="close" type="button" onClick={onDismiss}>
          <span className="lnr lnr-cross" />
        </button>
        <div className="alert__content">{children}</div>
      </Alert>
    );
  }

  return <Button onClick={onShow}>Show Alert</Button>;
};

export default AlertComponent;

AlertComponent.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AlertComponent.defaultProps = {
  color: '',
  icon: false,
  className: '',
};
