import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import MinusIcon from 'mdi-react/MinusIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

const CollapseComponent = ({ className, title, children }) => {
  const [collapse, setCollapse] = useState(false);
  const [view, setView] = useState({ styleClass: 'closed', icon: <PlusIcon /> });

  const onEntering = () => {
    setView({ styleClass: 'opening', icon: <MinusIcon /> });
  };

  const onEntered = () => {
    setView({ styleClass: 'opened', icon: <MinusIcon /> });
  };

  const onExiting = () => {
    setView({ styleClass: 'closing', icon: <PlusIcon /> });
  };

  const onExited = () => {
    setView({ styleClass: 'closed', icon: <PlusIcon /> });
  };

  const toggle = () => {
    setCollapse(prevState => !prevState);
  };

  return (
    <div className={`collapse__wrapper ${view.styleClass} ${className}`} dir="ltr">
      <button onClick={toggle} className="collapse__title" type="button">
        {view.icon}
        <p>{title}<ChevronDownIcon /></p>
      </button>
      <Collapse
        isOpen={collapse}
        className="collapse__content"
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div>
          {children}
        </div>
      </Collapse>
    </div>
  );
};

CollapseComponent.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CollapseComponent.defaultProps = {
  title: '',
  className: '',
};

export default CollapseComponent;
