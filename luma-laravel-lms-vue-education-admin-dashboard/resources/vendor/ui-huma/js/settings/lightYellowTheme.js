export default {
  'mainNavbar.navbar': function() {
    if (this.settings['layout.layout'] === 'sticky') {
      return 'dark-blue'
    }
    if (!['light', 'transparent'].includes(this.settings['mainNavbar.navbar'])) {
      return 'transparent'
    }
  },
  'mainDrawer.theme': function() {
    return !!this.settings['theme.darkMode'] ? 'dark-blue' : 'light-yellow'
  },

  '.layout-boxed .sidebar-brand': {
    removeClass: ['sidebar-brand-dark', 'bg-primary-pickled-bluewood', 'bg-dark-blue', 'bg-dark-purple', 'bg-dark', 'bg-black']
  },

  '.js-update-chart-line': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'yellow' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-area': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:yellow' },
      { 'name': 'data-chart-line-background-opacity', 'value': '0.1' }
    ]
  },
  '.js-update-chart-bar': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:yellow' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '#locationDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'yellow;yellow;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1;0.5;0.24' }
    ]
  },
  '#attendanceDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'primary;yellow;gray.700;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '#visitsByDeviceChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'yellow;gray.300' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-progress': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'primary;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-progress-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'yellow;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-line-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'yellow' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-line-2nd-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'primary,yellow' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },

  /////////////////
  // dodger blue //
  /////////////////
  
  '.bg-primary-dodger-blue': {
    addClass: ['bg-primary-yellow'],
    removeClass: ['bg-primary-dodger-blue']
  },
  '.bg-primary-pickled-bluewood': {
    addClass: ['bg-dark'],
    removeClass: ['bg-primary-pickled-bluewood']
  },
  '.bg-accent-dodger-blue': {
    addClass: ['bg-accent-pickled-bluewood'],
    removeClass: ['bg-accent-dodger-blue']
  },

  '.bg-primary-purple': {
    addClass: ['bg-primary-yellow'],
    removeClass: ['bg-primary-purple']
  },
  '.bg-primary-red': {
    addClass: ['bg-primary-yellow'],
    removeClass: ['bg-primary-red']
  },
  '.bg-primary': {
    addClass: ['bg-primary-yellow'],
    removeClass: ['bg-primary']
  },
  '.bg-dark': {
    addClass: ['bg-dark-blue'],
    removeClass: ['bg-dark']
  },
  '.bg-dark-purple': {
    addClass: ['bg-dark'],
    removeClass: ['bg-dark-purple']
  },
  '.bg-accent-red': {
    addClass: ['bg-accent-pickled-bluewood'],
    removeClass: ['bg-accent-red']
  },
  '.bg-accent': {
    addClass: ['bg-accent-pickled-bluewood'],
    removeClass: ['bg-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.border-left-primary-dodger-blue': {
    addClass: ['border-left-primary'],
    removeClass: ['border-left-primary-dodger-blue']
  },
  '.border-left-accent-pickled-bluewood': {
    addClass: ['border-left-accent-yellow'],
    removeClass: ['border-left-accent-pickled-bluewood']
  },

  '.border-left-primary-purple': {
    addClass: ['border-left-primary-yellow'],
    removeClass: ['border-left-primary-purple']
  },
  '.border-left-primary-red': {
    addClass: ['border-left-primary-yellow'],
    removeClass: ['border-left-primary-red']
  },
  '.border-left-accent-red': {
    addClass: ['border-left-accent-yellow'],
    removeClass: ['border-left-accent-red']
  },
  '.border-left-accent': {
    addClass: ['border-left-accent-yellow'],
    removeClass: ['border-left-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.alert-accent-dodger-blue': {
    addClass: ['alert-accent-yellow'],
    removeClass: ['alert-accent-dodger-blue']
  },
  '.alert-primary-dodger-blue': {
    addClass: ['alert-primary-yellow'],
    removeClass: ['alert-primary-dodger-blue']
  },
  '.alert-soft-primary-dodger-blue': {
    addClass: ['alert-soft-primary-yellow'],
    removeClass: ['alert-soft-primary-dodger-blue']
  },

  '.alert-primary-purple': {
    addClass: ['alert-primary-yellow'],
    removeClass: ['alert-primary-purple']
  },
  '.alert-primary-red': {
    addClass: ['alert-primary-yellow'],
    removeClass: ['alert-primary-red']
  },
  '.alert-primary': {
    addClass: ['alert-primary-yellow'],
    removeClass: ['alert-primary']
  },
  '.alert-accent-red': {
    addClass: ['alert-accent-yellow'],
    removeClass: ['alert-accent-red']
  },
  '.alert-accent': {
    addClass: ['alert-accent-yellow'],
    removeClass: ['alert-accent']
  },
  '.alert-soft-primary-purple': {
    addClass: ['alert-soft-primary-yellow'],
    removeClass: ['alert-soft-primary-purple']
  },
  '.alert-soft-primary-red': {
    addClass: ['alert-soft-primary-yellow'],
    removeClass: ['alert-soft-primary-red']
  },
  '.alert-soft-primary': {
    addClass: ['alert-soft-primary-yellow'],
    removeClass: ['alert-soft-primary']
  },
  '.alert-soft-accent-red': {
    addClass: ['alert-soft-accent-yellow'],
    removeClass: ['alert-soft-accent-red']
  },
  '.alert-soft-accent': {
    addClass: ['alert-soft-accent-yellow'],
    removeClass: ['alert-soft-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.text-primary-dodger-blue': {
    addClass: ['text-primary'],
    removeClass: ['text-primary-dodger-blue']
  },
  '.text-accent-pickled-bluewood': {
    addClass: ['text-accent-yellow'],
    removeClass: ['text-accent-pickled-bluewood']
  },

  '.text-primary-purple': {
    addClass: ['text-primary'],
    removeClass: ['text-primary-purple']
  },
  '.text-primary-red': {
    addClass: ['text-primary-yellow'],
    removeClass: ['text-primary-red']
  },
  '.text-primary': {
    addClass: ['text-primary-yellow'],
    removeClass: ['text-primary']
  },
  '.text-accent-red': {
    addClass: ['text-accent-yellow'],
    removeClass: ['text-accent-red']
  },
  '.text-accent': {
    addClass: ['text-accent-yellow'],
    removeClass: ['text-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.btn-accent-dodger-blue': {
    addClass: ['btn-accent-yellow'],
    removeClass: ['btn-accent-dodger-blue']
  },

  '.btn-accent-red': {
    addClass: ['btn-accent-yellow'],
    removeClass: ['btn-accent-red']
  },
  '.btn-accent': {
    addClass: ['btn-accent-yellow'],
    removeClass: ['btn-accent']
  },
  '.btn-primary-purple': {
    addClass: ['btn-primary-yellow'],
    removeClass: ['btn-primary-purple']
  },
  '.btn-primary-red': {
    addClass: ['btn-primary-yellow'],
    removeClass: ['btn-primary-red']
  },
  '.btn-primary': {
    addClass: ['btn-primary-yellow'],
    removeClass: ['btn-primary']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.badge-accent-dodger-blue': {
    addClass: ['badge-accent-yellow'],
    removeClass: ['badge-accent-dodger-blue']
  },

  '.badge-accent-red': {
    addClass: ['badge-accent-yellow'],
    removeClass: ['badge-accent-red']
  },
  '.badge-accent': {
    addClass: ['badge-accent-yellow'],
    removeClass: ['badge-accent']
  }
}