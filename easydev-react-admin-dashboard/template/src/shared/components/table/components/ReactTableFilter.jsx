import React from 'react';
import PropTypes from 'prop-types';
import { useAsyncDebounce } from 'react-table';
import { Input } from 'reactstrap';

const ReactTableFilter = ({
  rows,
  setGlobalFilter, setFilterValue, placeholder, dataLength,
}) => {
  const onChange = useAsyncDebounce((item) => {
    const value = item.trim();
    setFilterValue(value);
    setGlobalFilter(value);
  }, 200);

  return (
    <div className="table__search">
      <Input
        className="table__search table__search-input"
        onChange={e => onChange(e.target.value)}
        placeholder={`${placeholder}`}
      />
      {dataLength !== rows.length && (
        <span>Found {rows.length} matches</span>
      )}
    </div>
  );
};

const filterGreaterThan = (rows, id, filterValue) => rows.filter((row) => {
  const rowValue = row.values[id];
  return rowValue >= filterValue;
});

filterGreaterThan.autoRemove = val => typeof val !== 'number';

ReactTableFilter.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  setFilterValue: PropTypes.func,
  placeholder: PropTypes.string,
  dataLength: PropTypes.number.isRequired,
};

ReactTableFilter.defaultProps = {
  setFilterValue: () => {},
  placeholder: 'Search...',
};

export default ReactTableFilter;
