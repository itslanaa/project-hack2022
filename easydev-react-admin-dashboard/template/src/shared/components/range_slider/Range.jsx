import 'rc-slider/assets/index.css';
import React from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeTheme = ({
  marks, value, min, max, tipFormatter,
}) => (
  <div className="slider">
    <div className="slider__min">
      <p>{tipFormatter ? tipFormatter(min) : min}</p>
    </div>
    <div className="slider__max">
      <p>{tipFormatter ? tipFormatter(max) : max}</p>
    </div>
    <Range
      min={min}
      max={max}
      defaultValue={value}
      tipFormatter={tipFormatter}
      marks={marks}
      tipProps={{ visible: true }}
    />
  </div>
);

RangeTheme.propTypes = {
  marks: PropTypes.shape(),
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  tipFormatter: PropTypes.func,
};

RangeTheme.defaultProps = {
  marks: {},
  tipFormatter: value => value,
};

export default RangeTheme;
