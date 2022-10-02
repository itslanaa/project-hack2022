import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Legend, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import getTooltipStyles from '@/shared/helpers';
import ArrowDownwardIcon from 'mdi-react/ArrowDownwardIcon';
import Panel from '@/shared/components/Panel';
import OurMission from './OurMission';

const data = [{
  id: 0, name: 'Completed', value: 2500, fill: '#b8e986',
}, {
  id: 1, name: 'Online check-in', value: 2500, fill: '#4ce1b6',
}, {
  id: 2, name: 'Remain', value: 5000, fill: '#f2f4f7',
}];

const style = (dir) => {
  const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return ({
    ...left,
    marginTop: '-5px',
    lineHeight: '16px',
    position: 'absolute',
  });
};

const renderLegend = ({ payload }) => (
  <ul className="dashboard__booking-reservations-chart-legend dashboard__chart-legend">
    {payload.map(entry => (
      <li key={entry.payload.id}>
        <span style={{ backgroundColor: entry.color }} />
        <p>{entry.value}</p>
      </li>
    ))}
  </ul>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const Reservations = ({ dir, themeName }) => {
  const { t } = useTranslation('common');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    if (e.tooltipPosition) {
      setCoordinates({
        x: dir === 'ltr' ? e.tooltipPosition.x - 130 : e.tooltipPosition.x / 10, y: e.tooltipPosition.y - 40,
      });
    }
  };

  return (
    <Panel
      lg={6}
      xl={3}
      md={12}
      title={t('booking_dashboard.reservations')}
      subhead="Reservation overview"
      before={<OurMission />}
      panelClass="dashboard__booking-reservations-panel"
    >
      <div className="dashboard__booking-reservations">
        <p className="dashboard__booking-reservations-title">Total visitors on 23.08.2018</p>
        <p className="dashboard__booking-reservations-number">345</p>
        <div className="dashboard__booking-reservations-chart" dir={dir}>
          <ResponsiveContainer>
            <PieChart className="dashboard__booking-reservations-chart-container">
              <Tooltip position={coordinates} {...getTooltipStyles(themeName)} />
              <Pie
                data={data}
                dataKey="value"
                cy={80}
                innerRadius={47}
                outerRadius={65}
                onMouseMove={onMouseMove}
              />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style(dir)}
                content={renderLegend}
              />
            </PieChart>
          </ResponsiveContainer>
          <span href="/" className="dashboard__booking-reservations-link">
            Download report <ArrowDownwardIcon className="dashboard__booking-reservations-link-icon" />
          </span>
        </div>
      </div>
    </Panel>
  );
};

Reservations.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(Reservations);
