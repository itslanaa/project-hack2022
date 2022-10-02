import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import Panel, { PanelTitle } from '@/shared/components/Panel';

const data01 = [{ value: 78, fill: '#b8e986' },
  { value: 23, fill: '#eeeeee' }];

const data02 = [{ value: 25, fill: '#ff4861' },
  { value: 75, fill: '#eeeeee' }];

const social = [
  { id: 0, social: 'Booking.com', progress: '87' },
  { id: 1, social: 'Airbnb', progress: '65' },
  { id: 2, social: 'Tripadvisor', progress: '92' },
  { id: 3, social: 'Tripadvisor', progress: '81' },
];

const SocialScore = ({ children, progress }) => (
  <div className="dashboard__social-stat-item">
    <div className="dashboard__social-stat-title">
      {children}
    </div>
    <div className="dashboard__social-stat-progress">
      <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
        <p className="progress__label">{progress}%</p>
        <Progress value={progress} />
      </div>
    </div>
  </div>
);

SocialScore.propTypes = {
  progress: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const WeeklyStat = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      md={12}
      lg={6}
      xl={3}
      xs={12}
      title={t('booking_dashboard.weekly_stat')}
      subhead="Top selling items statistic by last month"
    >
      <div className="dashboard__weekly-stat">
        <div className="dashboard__weekly-stat-chart">
          <div className="dashboard__weekly-stat-chart-item">
            <div className="dashboard__weekly-stat-chart-pie">
              <ResponsiveContainer>
                <PieChart className="dashboard__weekly-stat-chart-pie-wrapper">
                  <Pie
                    data={data01}
                    dataKey="value"
                    cx={50}
                    cy={50}
                    innerRadius={50}
                    outerRadius={55}
                  />
                </PieChart>
              </ResponsiveContainer>
              <p className="dashboard__weekly-stat-label" style={{ color: '#b8e986' }}>78%</p>
            </div>
            <div className="dashboard__weekly-stat-info">
              <p>Customers satisfaction rate</p>
            </div>
          </div>
          <div className="dashboard__weekly-stat-chart-item">
            <div className="dashboard__weekly-stat-chart-pie">
              <ResponsiveContainer>
                <PieChart className="dashboard__weekly-stat-chart-pie-wrapper">
                  <Pie
                    data={data02}
                    dataKey="value"
                    cx={50}
                    cy={50}
                    innerRadius={50}
                    outerRadius={55}
                  />
                </PieChart>
              </ResponsiveContainer>
              <p className="dashboard__weekly-stat-label" style={{ color: '#ff4861' }}>25%</p>
            </div>
            <div className="dashboard__weekly-stat-info">
              <p>Negative <br />feedback</p>
            </div>
          </div>
        </div>
        <hr />
        <PanelTitle title={t('booking_dashboard.social_score')} />
        <div className="dashboard__social-stat">
          {social.map(item => (
            <SocialScore key={item.id} progress={item.progress}>
              {item.social}
            </SocialScore>
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default WeeklyStat;
