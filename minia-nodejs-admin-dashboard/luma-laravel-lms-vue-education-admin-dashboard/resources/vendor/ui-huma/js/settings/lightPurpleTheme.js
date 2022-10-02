export default {
  'mainNavbar.navbar': function() {
    if (this.settings['layout.layout'] === 'sticky') {
      return 'dark-purple'
    }
    if (!['light', 'transparent'].includes(this.settings['mainNavbar.navbar'])) {
      return 'transparent'
    }
  },
  'mainDrawer.theme': function() {
    return !!this.settings['theme.darkMode'] ? 'dark-purple' : 'light-purple'
  },

  '.layout-boxed .sidebar-brand': {
    removeClass: ['sidebar-brand-dark', 'bg-primary-pickled-bluewood', 'bg-dark-blue', 'bg-dark-purple', 'bg-black']
  },

  '.js-update-chart-line': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'purple' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-area': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:purple' },
      { 'name': 'data-chart-line-background-opacity', 'value': '0.1' }
    ]
  },
  '.js-update-chart-bar': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:purple' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '#locationDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'accent;purple;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
    ]
  },
  '#attendanceDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'purple;accent;gray.700;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
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
      { 'name': 'data-chart-line-background-color', 'value': 'purple;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-progress-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'accent;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-line-2nd-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'purple,accent' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-line-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'accent' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },

  /////////////////
  // dodger blue //
  /////////////////
  
  '.bg-primary-dodger-blue': {
    addClass: ['bg-primary-purple'],
    removeClass: ['bg-primary-dodger-blue']
  },
  '.bg-primary-pickled-bluewood': {
    addClass: ['bg-dark-purple'],
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
    addClass: ['bg-dark-purple'],
    removeClass: ['bg-dark-blue']
  },
  '.bg-dark': {
    addClass: ['bg-dark-purple'],
    removeClass: ['bg-dark']
  },
  '.bg-primary-red': {
    addClass: ['bg-primary-purple'],
    removeClass: ['bg-primary-red']
  },
  '.bg-primary-yellow': {
    addClass: ['bg-primary-purple'],
    removeClass: ['bg-primary-yellow']
  },
  '.bg-primary': {
    addClass: ['bg-primary-purple'],
    removeClass: ['bg-primary']
  },
  '.bg-accent': {
    addClass: ['bg-accent-red'],
    removeClass: ['bg-accent']
  },
  '.bg-accent-yellow': {
    addClass: ['bg-accent-red'],
    removeClass: ['bg-accent-yellow']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.border-left-primary-dodger-blue': {
    addClass: ['border-left-primary-purple'],
    removeClass: ['border-left-primary-dodger-blue']
  },
  '.border-left-accent-pickled-bluewood': {
    addClass: ['border-left-accent-red'],
    removeClass: ['border-left-accent-pickled-bluewood']
  },

  '.border-left-primary-red': {
    addClass: ['border-left-primary-purple'],
    removeClass: ['border-left-primary-red']
  },
  '.border-left-primary-yellow': {
    addClass: ['border-left-primary-purple'],
    removeClass: ['border-left-primary-yellow']
  },
  '.border-left-primary': {
    addClass: ['border-left-primary-purple'],
    removeClass: ['border-left-primary']
  },
  '.border-left-accent-yellow': {
    addClass: ['border-left-accent-red'],
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
  '.alert-primary-dodger-blue': {
    addClass: ['alert-primary-purple'],
    removeClass: ['alert-primary-dodger-blue']
  },
  '.alert-soft-primary-dodger-blue': {
    addClass: ['alert-soft-primary-purple'],
    removeClass: ['alert-soft-primary-dodger-blue']
  },

  '.alert-primary-red': {
    addClass: ['alert-primary-purple'],
    removeClass: ['alert-primary-red']
  },
  '.alert-primary-yellow': {
    addClass: ['alert-primary-purple'],
    removeClass: ['alert-primary-yellow']
  },
  '.alert-primary': {
    addClass: ['alert-primary-purple'],
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
  '.alert-soft-primary-red': {
    addClass: ['alert-soft-primary-purple'],
    removeClass: ['alert-soft-primary-red']
  },
  '.alert-soft-primary-yellow': {
    addClass: ['alert-soft-primary-purple'],
    removeClass: ['alert-soft-primary-yellow']
  },
  '.alert-soft-primary': {
    addClass: ['alert-soft-primary-purple'],
    removeClass: ['alert-soft-primary']
  },
  '.alert-soft-accent-yellow': {
    addClass: ['alert-soft-accent-red'],
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
    addClass: ['text-primary-purple'],
    removeClass: ['text-primary-dodger-blue']
  },
  '.text-accent-pickled-bluewood': {
    addClass: ['text-accent-red'],
    removeClass: ['text-accent-pickled-bluewood']
  },

  '.text-primary-yellow': {
    addClass: ['text-primary-purple'],
    removeClass: ['text-primary-yellow']
  },
  '.text-primary-red': {
    addClass: ['text-primary-purple'],
    removeClass: ['text-primary-red']
  },
  '.text-primary': {
    addClass: ['text-primary-yellow'],
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
    addClass: ['btn-accent-red'],
    removeClass: ['btn-accent-yellow']
  },
  '.btn-accent': {
    addClass: ['btn-accent-red'],
    removeClass: ['btn-accent']
  },
  '.btn-primary-yellow': {
    addClass: ['btn-primary-purple'],
    removeClass: ['btn-primary-yellow']
  },
  '.btn-primary-red': {
    addClass: ['btn-primary-purple'],
    removeClass: ['btn-primary-red']
  },
  '.btn-primary': {
    addClass: ['btn-primary-purple'],
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