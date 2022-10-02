import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';

const data = [
  {
    name: 'News', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Video', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Messages', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Photos', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Weather', uv: 1890, pv: 4800, amt: 2181,
  },
];

const AppTileClicks = ({ dir, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel
      lg={6}
      xl={6}
      md={12}
      title={t('app_dashboard.app_tile_clicks')}
      subhead="How effective your business is in comparison with the previous month"
      panelClass="panel--narrow"
    >
      <div dir="ltr">
        <ResponsiveContainer height={300} className="dashboard__active-users-chart">
          <BarChart
            width={600}
            height={220}
            data={data}
            layout="vertical"
            barGap={0}
            barCategoryGap={0}
            stackOffset="expand"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              hide
              reversed={dir === 'rtl'}
            />
            <YAxis
              type="category"
              dataKey="name"
              tickLine={false}
              verticalAnchor="start"
              orientation={dir === 'rtl' ? 'right' : 'left'}
            />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Bar dataKey="pv" fill="#48b5ff" barSize={12} />
            <Bar dataKey="uv" fill="#7edbff" barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

AppTileClicks.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(AppTileClicks);
