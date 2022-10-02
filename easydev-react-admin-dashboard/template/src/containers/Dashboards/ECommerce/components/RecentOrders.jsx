import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Table } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const header = [
  { id: 0, title: '#' },
  { id: 1, title: 'Invoice' },
  { id: 2, title: 'Customer Name' },
  { id: 3, title: 'Product' },
  { id: 4, title: 'Quantity' },
  { id: 5, title: 'Date' },
  { id: 6, title: 'Location' },
  { id: 7, title: 'Status' },
];

const rows = [
  {
    id: 1,
    invoice: 'In-123356',
    customer_name: 'Lok Morisson',
    product: 'Xiaomi Mi 6',
    quantity: '1',
    date: '2017/12/25',
    location: 'Melbourne',
    status: 'In Progress',
    badge: 'success',
  },
  {
    id: 2,
    invoice: 'In-254875',
    customer_name: 'Norman Brown',
    product: 'Apple iPhone 12 Pro',
    quantity: '1',
    date: '2020/11/25',
    location: 'Tokio',
    status: 'Completed',
    badge: 'primary',
  },
  {
    id: 3,
    invoice: 'In-877868',
    customer_name: 'Sam Medinberg',
    product: 'Xiaomi Mi 6',
    quantity: '1',
    date: '2020/11/13',
    location: 'Moscow',
    status: 'In Progress',
    badge: 'success',
  },
  {
    id: 4,
    invoice: 'In-619876',
    customer_name: 'Dave Morisson',
    product: 'Apple iPhone SE',
    quantity: '1',
    date: '2017/12/25',
    location: 'Moscow',
    status: 'In Progress',
    badge: 'success',
  },
  {
    id: 5,
    invoice: 'In-218778',
    customer_name: 'Klara Brown',
    product: 'Apple iPhone 12 Pro',
    quantity: '1',
    date: '2020/11/01',
    location: 'London',
    status: 'Completed',
    badge: 'primary',
  },
  {
    id: 6,
    invoice: 'In-626268',
    customer_name: 'Molly Medinberg',
    product: 'Apple iPhone 12',
    quantity: '1',
    date: '2020/11/01',
    location: 'Rome',
    status: 'Completed',
    badge: 'primary',
  },
];

const RecentOrders = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_commerce.recent_orders')}>
      <Table responsive className="table--bordered">
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.invoice}</td>
              <td>{item.customer_name}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td>{item.location}</td>
              <td><Badge color={item.badge}>{item.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default RecentOrders;
