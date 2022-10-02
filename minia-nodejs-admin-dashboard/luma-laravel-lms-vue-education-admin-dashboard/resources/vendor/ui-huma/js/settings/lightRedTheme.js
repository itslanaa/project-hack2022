export default {
  'mainNavbar.navbar': function() {
    if (this.settings['layout.layout'] === 'sticky') {
      return 'black'
    }
    if (!['light', 'transparent'].includes(this.settings['mainNavbar.navbar'])) {
      return 'transparent'
    }
  },
  'mainDrawer.theme': function() {
    return !!this.settings['theme.darkMode'] ? 'black' : 'light-red'
  },

  '.layout-boxed .sidebar-brand': {
    removeClass: ['sidebar-brand-dark', 'bg-primary-pickled-bluewood', 'bg-dark-blue', 'bg-dark-purple', 'bg-dark', 'bg-black']
  },
  
  '.js-update-chart-line': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'accent' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-area': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:accent' },
      { 'name': 'data-chart-line-background-opacity', 'value': '0.1' }
    ]
  },
  '.js-update-chart-bar': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:accent' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '#locationDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'accent;accent;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1;0.5;0.24' }
    ]
  },
  '#attendanceDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'accent;accent;gray.700;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1;0.5;1;1' }
    ]
  },
  '#visitsByDeviceChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'accent;gray.300' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-progress': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'accent;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-progress-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'accent;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-line-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'accent' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-line-2nd-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'accent,accent' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1,0.5' },
    ]
  },

  /////////////////
  // dodger blue //
  /////////////////
  
  '.bg-primary-dodger-blue': {
    addClass: ['bg-primary-red'],
    removeClass: ['bg-primary-dodger-blue']
  },
  '.bg-primary-pickled-bluewood': {
    addClass: ['bg-dark'],
    removeClass: ['bg-primary-pickled-bluewood']
  },
  '.bg-accent-pickled-bluewood': {
    addClass: ['bg-accent-red'],
    removeClass: ['bg-accent-pickled-bluewood']
  },
  '.bg-accent-dodger-blue': {
    addClass: ['bg-accent-red'],
    removeClass: ['bg-accent-dodger-blue']
  },

  '.bg-dark-blue': {
    addClass: ['bg-dark'],
    removeClass: ['bg-dark-blue']
  },
  '.bg-dark-purple': {
    addClass: ['bg-dark'],
    removeClass: ['bg-dark-purple']
  },
  '.bg-primary-purple': {
    addClass: ['bg-primary-red'],
    removeClass: ['bg-primary-purple']
  },
  '.bg-primary-yellow': {
    addClass: ['bg-primary-red'],
    removeClass: ['bg-primary-yellow']
  },
  '.bg-primary': {
    addClass: ['bg-primary-red'],
    removeClass: ['bg-primary']
  },
  '.bg-accent-yellow': {
    addClass: ['bg-accent-red'],
    removeClass: ['bg-accent-yellow']
  },
  '.bg-accent': {
    addClass: ['bg-accent-red'],
    removeClass: ['bg-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.border-left-primary-dodger-blue': {
    addClass: ['border-left-primary-red'],
    removeClass: ['border-left-primary-dodger-blue']
  },
  '.border-left-accent-pickled-bluewood': {
    addClass: ['border-left-accent-red'],
    removeClass: ['border-left-accent-pickled-bluewood']
  },

  '.border-left-primary-purple': {
    addClass: ['border-left-primary-red'],
    removeClass: ['border-left-primary-purple']
  },
  '.border-left-primary-yellow': {
    addClass: ['border-left-primary-red'],
    removeClass: ['border-left-primary-yellow']
  },
  '.border-left-primary': {
    addClass: ['border-left-primary-red'],
    removeClass: ['border-left-primary']
  },
  '.border-left-accent-yellow': {
    addClass: ['border-left-accent'],
    removeClass: ['border-left-accent-yellow']
  },
  '.border-left-accent': {
    addClass: ['border-left-accent-red'],
    removeClass: ['border-left-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.alert-accent-dodger-blue': {
    addClass: ['alert-accent-red'],
    removeClass: ['alert-accent-dodger-blue']
  },

  '.alert-primary-purple': {
    addClass: ['alert-primary-red'],
    removeClass: ['alert-primary-purple']
  },
  '.alert-primary-yellow': {
    addClass: ['alert-primary-red'],
    removeClass: ['alert-primary-yellow']
  },
  '.alert-primary': {
    addClass: ['alert-primary-red'],
    removeClass: ['alert-primary']
  },
  '.alert-accent-yellow': {
    addClass: ['alert-accent-red'],
    removeClass: ['alert-accent-yellow']
  },
  '.alert-accent': {
    addClass: ['alert-accent-red'],
    removeClass: ['alert-accent']
  },
  '.alert-soft-primary-purple': {
    addClass: ['alert-soft-primary-red'],
    removeClass: ['alert-soft-primary-purple']
  },
  '.alert-soft-primary-yellow': {
    addClass: ['alert-soft-primary-red'],
    removeClass: ['alert-soft-primary-yellow']
  },
  '.alert-soft-primary': {
    addClass: ['alert-soft-primary-red'],
    removeClass: ['alert-soft-primary']
  },
  '.alert-soft-accent-yellow': {
    addClass: ['alert-soft-accent'],
    removeClass: ['alert-soft-accent-yellow']
  },
  '.alert-soft-accent': {
    addClass: ['alert-soft-accent-red'],
    removeClass: ['alert-soft-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.text-primary-dodger-blue': {
    addClass: ['text-primary-red'],
    removeClass: ['text-primary-dodger-blue']
  },
  '.text-accent-pickled-bluewood': {
    addClass: ['text-accent-red'],
    removeClass: ['text-accent-pickled-bluewood']
  },

  '.text-primary-purple': {
    addClass: ['text-primary-red'],
    removeClass: ['text-primary-purple']
  },
  '.text-primary-yellow': {
    addClass: ['text-primary-red'],
    removeClass: ['text-primary-yellow']
  },
  '.text-primary': {
    addClass: ['text-primary-red'],
    removeClass: ['text-primary']
  },
  '.text-accent-yellow': {
    addClass: ['text-accent-red'],
    removeClass: ['text-accent-yellow']
  },
  '.text-accent': {
    addClass: ['text-accent-red'],
    removeClass: ['text-accent']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.btn-accent-dodger-blue': {
    addClass: ['btn-accent-red'],
    removeClass: ['btn-accent-dodger-blue']
  },

  '.btn-accent-yellow': {
    addClass: ['btn-accent'],
    removeClass: ['btn-accent-yellow']
  },
  '.btn-accent': {
    addClass: ['btn-accent-red'],
    removeClass: ['btn-accent']
  },
  '.btn-primary-purple': {
    addClass: ['btn-primary-red'],
    removeClass: ['btn-primary-purple']
  },
  '.btn-primary-yellow': {
    addClass: ['btn-primary-red'],
    removeClass: ['btn-primary-yellow']
  },
  '.btn-primary': {
    addClass: ['btn-primary-red'],
    removeClass: ['btn-primary']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.badge-accent-dodger-blue': {
    addClass: ['badge-accent-red'],
    removeClass: ['badge-accent-dodger-blue']
  },

  '.badge-accent-yellow': {
    addClass: ['badge-accent-red'],
    removeClass: ['badge-accent-yellow']
  },
  '.badge-accent': {
    addClass: ['badge-accent-red'],
    removeClass: ['badge-accent']
  }
}