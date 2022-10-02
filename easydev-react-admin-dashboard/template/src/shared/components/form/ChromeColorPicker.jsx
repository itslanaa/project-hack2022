import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Popover } from 'reactstrap';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

const ChromeColorPickerField = ({ onChange, name }) => {
  const [colorValue, setColorValue] = useState({
    color: '#70bbfd',
    rgb: {
      r: 112, g: 187, b: 253, a: 1,
    },
  });
  const [chromeColorActive, setChromeColorActive] = useState({
    displayColorPicker: false,
    active: false,
  });

  const { color, rgb } = colorValue;
  const { displayColorPicker, active } = chromeColorActive;

  const handleClick = (e) => {
    e.preventDefault();
    setChromeColorActive(
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
        <ChromePicker
          color={rgb}
          onChange={handleChange}
        />
      </Popover>
    </div>
  );
};

ChromeColorPickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default renderComponentField(ChromeColorPickerField);
