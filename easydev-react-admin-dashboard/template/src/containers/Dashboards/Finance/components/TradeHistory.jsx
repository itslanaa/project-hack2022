import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const header = [
  { id: 0, title: 'Coin' },
  { id: 1, title: 'Cost' },
  { id: 2, title: 'Change%' },
];

const rows = [
  {
    id: 0, coin: 'BTC', style: 'btc', cost: '$ 134,23', change: '+12,21 %',
  }, {
    id: 1, coin: 'ETH', style: 'eth', cost: '$ 12,23', change: '+0,21 %',
  }, {
    id: 2, coin: 'NEO', style: 'neo', cost: '$ 112,23', change: '-2,27 %',
  }, {
    id: 3, coin: 'STE', style: 'ste', cost: '$ 84,23', change: '-10,01 %',
  }, {
    id: 4, coin: 'EOS', style: 'eos', cost: '$ 134,23', change: '+12.68%',
  }, {
    id: 5, coin: 'LIT', style: 'lit', cost: '$ 94,23', change: '-1,96 %',
  },
];

const TradeHistory = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      xl={4}
      lg={5}
      md={12}
      xs={12}
      title={t('finance_dashboard.trade_history')}
      subhead="Ratings by Market Capitalization"
    >
      <Table responsive striped>
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
              <td>
                <p className={`bold-text dashboard__${item.style}`}>{item.coin}</p>
              </td>
              <td>{item.cost}</td>
              <td>{item.change}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default TradeHistory;
