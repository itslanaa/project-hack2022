import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
  },
  {
    name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
  },
  {
    name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
  },
  {
    name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
  },
  {
    name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
  },
  {
    name: 'unknown', uv: 6.67, pv: 4800, fill: '#ffc658',
  },
];

const style = {
  lineHeight: '24px',
};

const tooltipColor = {
  color: '#70bbfd',
};

const SimpleRadialBarChart = ({ dir }) => {
  const { t } = useTranslation('common');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    if (e.activeCoordinate) {
      setCoordinates({ x: dir === 'ltr' ? e.activeCoordinate.x : e.activeCoordinate.x / 10, y: e.activeCoordinate.y });
    }
  };

  return (
    <Col xs={12} md={12} lg={6} xl={4}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('charts.recharts.simple_radial_bar_chart')}</h5>
          </div>
          <div dir={dir}>
            <ResponsiveContainer height={320}>
              <RadialBarChart
                cy={130}
                innerRadius={10}
                outerRadius={120}
                barSize={10}
                data={data}
                onMouseMove={onMouseMove}
              >
                <Tooltip itemStyle={tooltipColor} position={coordinates} />
                <RadialBar minAngle={15} background clockWise dataKey="uv" />
                <Legend iconSize={10} wrapperStyle={style} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

SimpleRadialBarChart.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default SimpleRadialBarChart;
