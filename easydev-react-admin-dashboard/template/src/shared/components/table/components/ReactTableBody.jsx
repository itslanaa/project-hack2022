import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProps } from '@/shared/prop-types/ReducerProps';
import ReactTableDnDBody from './ReactTableDnDBody';

const ReactTableDefaultBody = ({ page, getTableBodyProps, prepareRow }) => (
  <tbody className="table table--bordered" {...getTableBodyProps()}>
    {page.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => (
            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          ))}
        </tr>
      );
    })}
  </tbody>
);

ReactTableDefaultBody.propTypes = {
  page: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTableBodyProps: PropTypes.func.isRequired,
  prepareRow: PropTypes.func.isRequired,
};

const ReactTableBody = ({
  page, getTableBodyProps, prepareRow, withDragAndDrop, updateDraggableData, theme,
}) => (
  <Fragment>
    {withDragAndDrop
      ? (
        <ReactTableDnDBody
          page={page}
          getTableBodyProps={getTableBodyProps}
          prepareRow={prepareRow}
          updateDraggableData={updateDraggableData}
          theme={theme}
        />
      ) : (
        <ReactTableDefaultBody
          page={page}
          getTableBodyProps={getTableBodyProps}
          prepareRow={prepareRow}
        />
      )}
  </Fragment>
);

ReactTableBody.propTypes = {
  page: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTableBodyProps: PropTypes.func.isRequired,
  prepareRow: PropTypes.func.isRequired,
  updateDraggableData: PropTypes.func.isRequired,
  withDragAndDrop: PropTypes.bool.isRequired,
  theme: ThemeProps.isRequired,
};

export default connect(state => ({
  theme: state.theme,
}))(ReactTableBody);
