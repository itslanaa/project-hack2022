import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Popover } from 'reactstrap';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

const SketchColorPickerField = ({ onChange, name }) => {
  const [colorValue, setColorValue] = useState({
    color: '#ff4861',
    rgb: {
      r: 246, g: 129, b: 110, a: 1,
    },
  });
  const [sketchColorActive, setSketchColorActive] = useState({
    displayColorPicker: false,
    active: false,
  });

  const { color, rgb } = colorValue;
  const { displayColorPicker, active } = sketchColorActive;

  const handleClick = (e) => {
    e.preventDefault();
    setSketchColorActive(
      { displayColorPicker: !displayColorPicker, active: !active },
    );
  };
  const handleChange = (changeColor) => {
    setColorValue({ color: changeColor.hex, rgb: changeColor.rgb });
    onChange(changeColor);
  };

  return (
    <div className="color-picker">
      <button
        type="button"
        className={`color-picker__button${active ? ' active' : ''}`}
        onClick={handleClick}
        id={name}
      >
        <p className="color-picker__color">{color}</p>
        <div className="color-picker__color-view" style={{ backgroundColor: color }} />
      </button>
      <Popover
        isOpen={displayColorPicker}
        target={name}
        placement="bottom"
        className="color-picker__popover"
      >
        <SketchPicker
          color={rgb}
          onChange={handleChange}
        />
      </Popover>
    </div>
  );
};

SketchColorPickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default renderComponentField(SketchColorPickerField);
