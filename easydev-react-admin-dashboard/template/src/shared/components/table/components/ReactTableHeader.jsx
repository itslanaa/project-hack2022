import React from 'react';
import PropTypes from 'prop-types';
import SortIcon from 'mdi-react/SortIcon';
import SortAscendingIcon from 'mdi-react/SortAscendingIcon';
import SortDescendingIcon from 'mdi-react/SortDescendingIcon';

const Header = ({ column, isSortable }) => (
  <span className="react-table__column-header">
    <span className={isSortable ? 'react-table__column-header sortable' : ''}>
      {column.render('Header')}
    </span>
    {isSortable && column.canSort && <Sorting column={column} />}
  </span>
);

Header.propTypes = {
  column: PropTypes.shape({
    Header: PropTypes.string,
    disableGlobalFilter: PropTypes.bool,
    accessor: PropTypes.func,
    render: PropTypes.func,
    canSort: PropTypes.bool,
  }).isRequired,
  isSortable: PropTypes.bool.isRequired,
};

const Sorting = ({ column }) => (
  <span className="react-table__column-header sortable">
    {column.isSortedDesc === undefined ? (
      <SortIcon />
    ) : (
      <span>
        {column.isSortedDesc
          ? <SortDescendingIcon />
          : <SortAscendingIcon />}
      </span>
    )}
  </span>
);

Sorting.propTypes = {
  column: PropTypes.shape({
    Header: PropTypes.string,
    disableGlobalFilter: PropTypes.bool,
    accessor: PropTypes.func,
    isSorted: PropTypes.bool,
    isSortedDesc: PropTypes.bool,
  }).isRequired,
};

const getStylesResizable = (props, align = 'left') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
];

const ReactTableHeader = ({ headerGroups, isResizable, isSortable }) => {
  const headerPropsSortable = (props, { column }) => {
    if (column.getSortByToggleProps && isSortable) {
      return column.getSortByToggleProps;
    }
    return { column };
  };
  const headerPropsResize = (props, { column }) => {
    if (column.getResizerProps) {
      return getStylesResizable(props, column.align);
    }
    return { column };
  };

  return (
    <thead className="thead th">
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()} className="react-table thead tr">
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps(headerPropsSortable)}
              {...column.getHeaderProps(headerPropsResize)}
              {...column.getHeaderProps()}
            >
              <Header
                column={column}
                isSortable={isSortable}
              />
              {isResizable && (
                <div {...column.getResizerProps()} className={`resizer ${column.isResizing && 'isResizing'}`} />
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

ReactTableHeader.propTypes = {
  headerGroups: PropTypes.arrayOf(PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.shape()),
    getHeaderGroupProps: PropTypes.func,
    getFooterGroupProps: PropTypes.func,
  })).isRequired,
  isResizable: PropTypes.bool.isRequired,
  isSortable: PropTypes.bool.isRequired,
};

export default ReactTableHeader;
