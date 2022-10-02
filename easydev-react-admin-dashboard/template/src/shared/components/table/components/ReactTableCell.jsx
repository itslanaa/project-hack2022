import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';

const ReactTableCell = ({ value: initialValue, state, column }) => (
  <Fragment>
    {column.disableGlobalFilter ? (
      <Fragment>{initialValue}</Fragment>
    ) : (
      <Highlighter
        className="react-table__highlighter"
        searchWords={[state.globalFilter]}
        autoEscape
        textToHighlight={`${initialValue}`}
      />
    )}
  </Fragment>
);

ReactTableCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  state: PropTypes.shape({
    globalFilter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  column: PropTypes.shape().isRequired,
};

export default ReactTableCell;
