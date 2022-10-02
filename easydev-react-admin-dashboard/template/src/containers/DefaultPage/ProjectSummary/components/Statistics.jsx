import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';
import { Button } from 'reactstrap';
import LoadingIcon from 'mdi-react/LoadingIcon';

const data01 = [{ name: 'New Tasks', value: 40, fill: '#4ce1b6' },
  { name: 'Done Tasks', value: 175, fill: '#70bbfd' },
  { name: 'High Priority Task', value: 70, fill: '#ff4861' }];

const data012 = [{ name: 'New Tasks', value: 95, fill: '#4ce1b6' },
  { name: 'Done Tasks', value: 118, fill: '#70bbfd' },
  { name: 'High Priority Task', value: 59, fill: '#ff4861' }];

const data02 = [{ name: 'Minor Bugs', value: 150, fill: '#4ce1b6' },
  { name: 'Resolved Bugs', value: 75, fill: '#70bbfd' },
  { name: 'Critical Bugs', value: 75, fill: '#ff4861' }];

const data022 = [{ name: 'Minor Bugs', value: 62, fill: '#4ce1b6' },
  { name: 'Resolved Bugs', value: 115, fill: '#70bbfd' },
  { name: 'Critical Bugs', value: 65, fill: '#ff4861' }];

const tooltipColor = {
  color: '#70bbfd',
};

const Statistics = ({ dir }) => {
  const [update, setUpdate] = useState(false);
  const [data1, setData1] = useState(data01);
  const [data2, setData2] = useState(data02);

  const onUpdate = () => {
    const stateData1 = data1;
    const stateData2 = data2;

    setUpdate(true);
    const data11 = stateData1 === data01 ? data012 : data01;
    const data12 = stateData2 === data02 ? data022 : data02;
    setTimeout(() => {
      setUpdate(false);
      setData1(data11);
      setData2(data12);
    }, 2000);
  };

  return (
    <div className="project-summary__statistics">
      {update ? <div className="project-summary__statistics-refresh"><LoadingIcon /></div> : ''}
      <Button className="project-summary__statistics-btn" outline size="sm" onClick={onUpdate}>
        Update Data
      </Button>
      <div className="project-summary__statistic">
        <p className="project-summary__statistic-title">Task Statistic</p>
        <div className="project-summary__statistic-chart-wrap" dir={dir}>
          <PieChart width={300} height={270}>
            <Tooltip itemStyle={tooltipColor} />
            <Pie data={data1} dataKey="value" cx="50%" cy={110} innerRadius={60} outerRadius={80} label />
            <Legend />
          </PieChart>
        </div>
      </div>
      <div className="project-summary__statistic">
        <p className="project-summary__statistic-title">Bug Statistic</p>
        <div className="project-summary__statistic-chart-wrap" dir={dir}>
          <PieChart width={300} height={270}>
            <Tooltip itemStyle={tooltipColor} />
            <Pie data={data2} dataKey="value" cx="50%" cy={110} innerRadius={60} outerRadius={80} label />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default Statistics;
