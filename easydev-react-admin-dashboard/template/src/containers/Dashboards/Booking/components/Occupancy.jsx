import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { Table } from 'reactstrap';
import Panel from '@/shared/components/Panel';
import OccupancyTooltipContent from './OccupancyTooltipContent';

const data = [
  {
    name: 'Mon 10/07',
    uv: 95,
    departure: 75,
    arrival: 10,
  },
  {
    name: 'Tue 11/07',
    uv: 85,
    departure: 23,
    arrival: 65,
  },
  {
    name: 'Wed 12/07',
    uv: 47,
    departure: 26,
    arrival: 45,
  },
  {
    name: 'Thu 13/07',
    uv: 80,
    departure: 25,
    arrival: 45,
  },
  {
    name: 'Fri 14/07',
    uv: 55,
    departure: 35,
    arrival: 15,
  },
  {
    name: 'Sat 15/07',
    uv: 99,
    departure: 30,
    arrival: 40,
  },
  {
    name: 'Sun 16/07',
    uv: 85,
    departure: 48,
    arrival: 26,
  },
];

const data01 = [
  {
    id: 0,
    color: 'blue',
    head: 'Arrivals',
    data: [{
      id: 0, value: 24,
    }, {
      id: 1, value: 74,
    }, {
      id: 2, value: 54,
    }, {
      id: 3, value: 57,
    }, {
      id: 4, value: 32,
    }, {
      id: 5, value: 68,
    }, {
      id: 6, value: 53,
    }],
  },
  {
    id: 1,
    color: 'green',
    head: 'Departures',
    data: [{
      id: 0, value: 75,
    }, {
      id: 1, value: 65,
    }, {
      id: 2, value: 46,
    }, {
      id: 3, value: 35,
    }, {
      id: 4, value: 65,
    }, {
      id: 5, value: 21,
    }, {
      id: 6, value: 34,
    }],
  },
  {
    id: 2,
    color: 'gray',
    head: 'Stay overs',
    data: [{
      id: 0, value: 3113,
    }, {
      id: 1, value: 2424,
    }, {
      id: 2, value: 4545,
    }, {
      id: 3, value: 4543,
    }, {
      id: 4, value: 3432,
    }, {
      id: 5, value: 3211,
    }, {
      id: 6, value: 2112,
    }],
  },
  {
    id: 3,
    color: 'gray',
    head: 'Customers',
    data: [{
      id: 0, value: 131,
    }, {
      id: 1, value: 133,
    }, {
      id: 2, value: 343,
    }, {
      id: 3, value: 342,
    }, {
      id: 4, value: 351,
    }, {
      id: 5, value: 234,
    }, {
      id: 6, value: 242,
    }],
  },
];

const toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`;

const Occupancy = ({ dir, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel
      xl={6}
      lg={12}
      md={12}
      title={t('booking_dashboard.occupancy')}
      subhead="See how effective your business is"
    >
      <div dir="ltr">
        <ResponsiveContainer height={260}>
          <ComposedChart data={data} margin={{ top: 20, left: -15 }}>
            <XAxis dataKey="name" tickLine={false} padding={{ left: 20 }} reversed={dir === 'rtl'} />
            <YAxis tickLine={false} tickFormatter={toPercent} orientation={dir === 'rtl' ? 'right' : 'left'} />
            <Tooltip content={<OccupancyTooltipContent colorForKey={{ uv: '#555555' }} theme={themeName} />} />
            <CartesianGrid vertical={false} />
            <Bar dataKey="uv" name="Stay overs" fill="#f2f4f7" barSize={20} />
            <Line type="linear" name="Departures" dataKey="departure" stroke="#b8e986" />
            <Line type="linear" name="Arrivals" dataKey="arrival" stroke="#48b5ff" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <hr />
      <div>
        <Table responsive className="table dashboard__occupancy-table">
          <tbody>
            {data01.map(items => (
              <tr key={items.id}>
                <td className="td-head">{items.head}</td>
                <Fragment>
                  {items.data.map(item => (
                    <td key={item.id} className={`td-${items.color}`}>{item.value}</td>
                  ))}
                </Fragment>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Panel>
  );
};

Occupancy.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(Occupancy);
