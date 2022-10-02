import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Collapse, UncontrolledTooltip } from 'reactstrap';
import DownIcon from 'mdi-react/ChevronDownIcon';
import ReactTableCustomizerToggle from './ReactTableCustomizerToggle';

const ReactTableCustomizer = ({
  handleClickIsEditable,
  handleClickIsResizable,
  handleClickIsSortable,
  handleClickWithDragAndDrop,
  handleClickWithPagination,
  handleClickWithSearchEngine,
  isEditable,
  isResizable,
  isSortable,
  isDisabledDragAndDrop,
  isDisabledEditable,
  isDisabledResizable,
  withDragAndDrop,
  withPagination,
  withSearchEngine,
  fullCustomizer,
}) => {
  const arrayTableCustomizerSingleToggle = [
    {
      id: 0, text: 'Filtration mode', func: handleClickWithSearchEngine, isChecked: withSearchEngine,
    },
    {
      id: 1, text: 'Sortable mode', func: handleClickIsSortable, isChecked: isSortable,
    },
    {
      id: 2, text: 'Pagination mode', func: handleClickWithPagination, isChecked: withPagination,
    },
  ];
  const arrayTableCustomizerAddictionToggle = [
    {
      id: 0,
      text: 'Drag&Drop mode',
      func: handleClickWithDragAndDrop,
      isChecked: withDragAndDrop,
      isDisabled: isDisabledDragAndDrop,
      tooltip: 'Drag&Drop mode cannot be performed at the same time with Resizable Mode',
    },
    {
      id: 1,
      text: 'Editable mode',
      func: handleClickIsEditable,
      isChecked: isEditable,
      isDisabled: isDisabledEditable,
      tooltip: 'Editable mode cannot be performed at the same time with Resizable Mode',
    },
    {
      id: 2,
      text: 'Resizable mode',
      func: handleClickIsResizable,
      isChecked: isResizable,
      isDisabled: isDisabledResizable,
      tooltip: 'Resizable mode cannot be performed at the same time with Drag&Drop and Editable Mode',
    },
  ];
  const [collapse, setCollapse] = useState(false);

  const handleOpen = () => {
    setCollapse(!collapse);
  };

  return (
    <Row className="react-table__customizer">
      <div className="table__collapse">
        <button className="table__btn" type="button" onClick={handleOpen}>
          <h5>Table customizer</h5>
          <DownIcon className="table__icon" />
        </button>
        {collapse && (
          <button
            className="table__collapse-back"
            aria-label="table__collapse-back"
            type="button"
            onClick={handleOpen}
          />
          )}
        <Collapse
          isOpen={collapse}
          className="table__collapse-content"
        >
          <div className="table__collapse-title-wrap">
            <p>This customizer allows you to see the different variations of the data table.</p>
          </div>
          <div className="table__collapse-item">
            {arrayTableCustomizerSingleToggle.map(item => (
              <ReactTableCustomizerToggle
                key={item.id}
                text={item.text}
                handleClick={item.func}
                isChecked={item.isChecked}
              />
            ))}
          </div>
          {fullCustomizer && (
            <div className="table__collapse-item">
              {arrayTableCustomizerAddictionToggle.map(item => (
                <div id={`tooltip-${item.id}`} key={item.id}>
                  <ReactTableCustomizerToggle
                    key={item.id}
                    text={item.text}
                    handleClick={item.func}
                    isChecked={item.isChecked}
                    isDisabled={item.isDisabled}
                  />
                  {item.isDisabled && (
                    <UncontrolledTooltip
                      className="table__collapse-item--tooltip"
                      placement="left"
                      target={`tooltip-${item.id}`}
                    >
                      {item.tooltip}
                    </UncontrolledTooltip>
                  )}
                </div>
              ))}
            </div>
          )}
        </Collapse>
      </div>
    </Row>
  );
};

ReactTableCustomizer.propTypes = {
  handleClickIsEditable: PropTypes.func,
  handleClickIsResizable: PropTypes.func,
  handleClickIsSortable: PropTypes.func.isRequired,
  handleClickWithDragAndDrop: PropTypes.func,
  handleClickWithPagination: PropTypes.func.isRequired,
  handleClickWithSearchEngine: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  isResizable: PropTypes.bool,
  isSortable: PropTypes.bool.isRequired,
  isDisabledDragAndDrop: PropTypes.bool,
  isDisabledEditable: PropTypes.bool,
  isDisabledResizable: PropTypes.bool,
  withDragAndDrop: PropTypes.bool,
  withPagination: PropTypes.bool.isRequired,
  withSearchEngine: PropTypes.bool.isRequired,
  fullCustomizer: PropTypes.bool,
};

ReactTableCustomizer.defaultProps = {
  handleClickIsEditable: () => {},
  handleClickIsResizable: () => {},
  handleClickWithDragAndDrop: () => {},
  isEditable: false,
  isResizable: false,
  isDisabledDragAndDrop: false,
  isDisabledEditable: false,
  isDisabledResizable: false,
  withDragAndDrop: false,
  fullCustomizer: false,
};

export default ReactTableCustomizer;
