import React from 'react';
import PropTypes from 'prop-types';

const ReactTableFooter = ({ footerGroups }) => (
  <tfoot className="tfoot">
    {footerGroups.map(group => (
      <tr {...group.getFooterGroupProps()}>
        {group.headers.map(column => (
          <td {...column.getFooterProps()}>{column.render('Footer')}</td>
        ))}
      </tr>
    ))}
  </tfoot>
);

ReactTableFooter.propTypes = {
  footerGroups: PropTypes.arrayOf(PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.shape()),
    getFooterGroupProps: PropTypes.func,
  })).isRequired,
};

export default ReactTableFooter;
