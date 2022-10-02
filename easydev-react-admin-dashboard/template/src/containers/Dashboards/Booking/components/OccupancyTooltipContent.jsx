import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '@/shared/helpers';

const renderContent = (itemSorter, colorForKey, payload) => {
  if (payload && payload.length) {
    const listStyle = { padding: 0, margin: 0 };

    const items = payload.sort(itemSorter)
      .map((entry, i) => {
        const finalItemStyle = {
          display: 'block',
          paddingTop: 4,
          paddingBottom: 4,
          color: entry.color || '#555555',
        };
        Object.keys(colorForKey)
          .filter(key => key === entry.dataKey)
          .forEach((key) => {
            finalItemStyle.color = colorForKey[key];
          });

        return (
          <li className="recharts-tooltip-item" key={`tooltip-item-${i + 1}`} style={finalItemStyle}>
            <span className="recharts-tooltip-item-name">{entry.name}</span>
            <span className="recharts-tooltip-item-separator"> : </span>
            <span className="recharts-tooltip-item-value">
              {entry.value}
            </span>
            <span className="recharts-tooltip-item-unit">{entry.unit || ''}</span>
          </li>
        );
      });

    return <ul className="recharts-tooltip-item-list" style={listStyle}>{items}</ul>;
  }
  return null;
};

const finalStyle = theme => ({
  margin: 0,
  padding: 10,
  backgroundColor: theme === 'theme-dark' ? themes.darkTheme.backgroundColor : '#fff',
  border: '1px solid #ccc',
  whiteSpace: 'nowrap',
});

const finalLabelStyle = {
  margin: 0,
};

const OccupancyTooltipContent = ({
  label, theme, itemSorter, colorForKey, payload,
}) => (
  <div className="recharts-default-tooltip" style={finalStyle(theme)}>
    <p className="recharts-tooltip-label" style={finalLabelStyle}>{label}</p>
    {renderContent(itemSorter, colorForKey, payload)}
  </div>
);

OccupancyTooltipContent.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.string.isRequired,
  colorForKey: PropTypes.objectOf(PropTypes.string),
  itemSorter: PropTypes.func,
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    dataKey: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string,
  })),
};

OccupancyTooltipContent.defaultProps = {
  colorForKey: {},
  label: '',
  itemSorter: () => {},
  payload: [],
};

export default OccupancyTooltipContent;
