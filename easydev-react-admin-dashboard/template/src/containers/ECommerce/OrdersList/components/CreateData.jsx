import React, { useMemo } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const MoneyFormatter = ({ value }) => (
  <div>
    ${value}
  </div>
);

MoneyFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Enabled</span>
    : <span className="badge badge-disabled">Disabled</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const CreateDataOrderListTable = () => {
  const columns = useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'ID',
        width: 80,
        disableGlobalFilter: true,
      },
      {
        accessor: 'date',
        Header: 'Date',
        disableSortBy: true,
        disableGlobalFilter: true,
      },
      {
        accessor: 'customer_name',
        Header: 'Customer Name',
      },
      {
        accessor: 'price',
        Header: 'Price',
        formatter: MoneyFormatter,
      },
      {
        accessor: 'tax',
        Header: 'Tax',
        formatter: MoneyFormatter,
      },
      {
        accessor: 'delivery',
        Header: 'Delivery',
        formatter: MoneyFormatter,
      },
      {
        accessor: 'quantity',
        Header: 'Quantity',
      },
      {
        accessor: 'status',
        Header: 'Status',
        disableGlobalFilter: true,
        disableSortBy: true,
        formatter: StatusFormatter,
        width: 110,
      },
    ], [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
      - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: Math.min(99999, Math.round((Math.random() * 99999) + 1000)),
        date: getRandomDate(new Date(2017, 3, 1), new Date(2018, 3, 1)),
        customer_name: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        price: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
        tax: Math.min(10, Math.random() * 10).toFixed(2),
        delivery: Math.min(10, Math.random() * 10).toFixed(2),
        quantity: Math.min(5, Math.round((Math.random() * 5) + 1)),
        status: [
          (<Badge color="success">Enable</Badge>),
          (<Badge color="secondary">Disable</Badge>),
        ][Math.floor((Math.random() * 2))],
      });
    }
  };

  rows();
  const orderListTableData = { tableHeaderData: columns, tableRowsData: data };
  return orderListTableData;
};

export default CreateDataOrderListTable;
