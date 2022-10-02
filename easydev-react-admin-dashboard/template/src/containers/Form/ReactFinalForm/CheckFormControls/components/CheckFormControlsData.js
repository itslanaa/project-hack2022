export const formGroup = [
  { color: '#4ce1b6', defaultChecked: true },
  { color: '#70bbfd' },
  { color: '#fa4a86' },
  { color: '#f6da6e' },
  { color: '#7ed321' },
  { color: '#b635ba' },
  { color: '#ff4861' },
  { color: '#38c3d7' },
  { color: '#f98330' },
];

export const checkboxGroup = [
  {
    name: 'checkbox_one', label: 'Checkbox 1', defaultChecked: true,
  }, {
    name: 'checkbox_two', label: 'Checkbox 2',
  }, {
    name: 'checkbox_disable', label: 'Checkbox Disabled', disabled: true,
  }, {
    name: 'checkbox_disable_check', label: 'Disabled & checked', defaultChecked: true, disabled: true,
  },
];

export const radioButtonsGroup = [
  {
    name: 'radio_button', label: 'Radio button 1', radioValue: '1', initialValue: '1',
  }, {
    name: 'radio_button', label: 'Radio button 2', radioValue: '2',
  }, {
    name: 'radio_disabled_button', label: 'Radio button disabled', radioValue: '1', disabled: true,
  }, {
    name: 'radio_disabled_button', label: 'Disabled & checked', radioValue: '2', initialValue: '2', disabled: true,
  },
];
