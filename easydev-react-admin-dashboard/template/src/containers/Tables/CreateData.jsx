import React, { useMemo } from 'react';

const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'First name',
        accessor: 'first',
      },
      {
        Header: 'Last name',
        accessor: 'last',
        disableGlobalFilter: true,
      },
      {
        Header: 'Username',
        accessor: 'user',
        disableGlobalFilter: true,
      },
      {
        Header: 'Age',
        accessor: 'age',
        disableGlobalFilter: true,
        Footer: (info) => {
          const { rows, flatRows } = info;
          const totalAge = useMemo(
            () => rows.reduce((sum, row) => Number(row.values.age) + sum, 0),
            [rows],
          );
          const age = Math.round(totalAge / flatRows.length);
          return <span>{age}</span>;
        },
      },
      {
        Header: 'Date',
        accessor: 'date',
        disableGlobalFilter: true,
      },
      {
        Header: 'Location',
        accessor: 'location',
        disableGlobalFilter: true,
      },
      {
        Header: 'Work',
        accessor: 'work',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: i,
        first: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        last: ['Morrison', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
        user: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
        age: Math.min(100, Math.round(Math.random() * 30) + 20),
        date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        location: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
        work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
