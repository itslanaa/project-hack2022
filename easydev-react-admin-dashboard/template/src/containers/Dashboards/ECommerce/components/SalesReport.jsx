import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const data = [
  {
    id: 0, title: 'Today', now: '$ 298,92', plan: '$ 250 planned', label: '100%', value: 100, pink: false,
  }, {
    id: 1, title: 'This week', now: '$ 1423,01', plan: '$ 1500 planned', label: '98%', value: 98, pink: true,
  }, {
    id: 2, title: 'This month', now: '$ 44321,74', plan: '$ 45000 planned', label: '100%', value: 87, pink: true,
  },
];

const SalesReport = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={7} xl={5} sm={12} xs={12} title={t('dashboard_commerce.sales_report')}>
      <div className="dashboard__sales-report">
        {data.map(item => (
          <div
            key={item.id}
            className={!item.pink
              ? 'progress-wrap progress-wrap--small'
              : 'progress-wrap progress-wrap--small progress-wrap--pink'}
          >
            <p className="dashboard__sales-report-title">{item.title}</p>
            <p className="dashboard__sales-report-now">{item.now}</p>
            <p className="dashboard__sales-report-plan">{item.plan}</p>
            <p className="dashboard__sales-report-value progress__label">{item.label}</p>
            <Progress value={item.value} />
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default SalesReport;
