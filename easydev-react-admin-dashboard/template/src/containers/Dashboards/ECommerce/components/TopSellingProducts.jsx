import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  PieChart, Pie, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';

const data01 = [{
  id: 0, name: 'Sony Xperia Z', value: 12934, fill: '#4ce1b6',
}, {
  id: 1, name: 'Xiaomi Mi 6', value: 9934, fill: '#70bbfd',
}, {
  id: 2, name: 'Apple iPhone 7 Plus', value: 20432, fill: '#f6da6e',
}, {
  id: 3, name: 'Apple iPhone 6 Plus', value: 15432, fill: '#ff4861',
}];

const style = (dir) => {
  const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return ({
    ...left,
    width: 150,
    lineHeight: '24px',
    position: 'absolute',
  });
};

const renderLegend = ({ payload }) => (
  <ul className="dashboard__chart-legend">
    {payload.map(entry => (
      <li key={entry.payload.id}><span style={{ backgroundColor: entry.color }} />{entry.value}</li>
    ))}
  </ul>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const TopSellingProducts = ({ dir, themeName }) => {
  const { t } = useTranslation('common');
  const [coordinates, setCoordinate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    if (e.tooltipPosition) {
      setCoordinate({ x: dir === 'ltr' ? e.tooltipPosition.x : e.tooltipPosition.x / 10, y: e.tooltipPosition.y });
    }
  };

  return (
    <Panel lg={12} xl={6} md={12} xs={12} title={t('dashboard_commerce.top_selling_products')}>
      <div dir={dir}>
        <ResponsiveContainer className="dashboard__chart-pie dashboard__chart-pie--commerce" height={360}>
          <PieChart className="dashboard__chart-pie-container">
            <Tooltip position={coordinates} {...getTooltipStyles(themeName)} />
            <Pie
              data={data01}
              dataKey="value"
              cy={180}
              innerRadius={130}
              outerRadius={160}
              label
              onMouseMove={onMouseMove}
            />
            <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style(dir)} content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

TopSellingProducts.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(TopSellingProducts);
