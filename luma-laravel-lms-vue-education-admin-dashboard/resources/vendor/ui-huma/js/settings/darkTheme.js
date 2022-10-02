export default {
  'mainNavbar.navbar': function() {
    if (!!this.settings['theme.darkMode']) {
      return this.settings['layout.layout'] === 'boxed' ? 'dark' : 'dark-mode'
    }
    if (['default', 'boxed'].includes(this.settings['layout.layout'])) {
      return 'dark'
    }
    if (!['transparent', 'light'].includes(this.settings['mainNavbar.navbar'])) {
      return 'transparent'
    }
  },
  'mainDrawer.theme': function() {
    return this.settings['layout.layout'] !== 'boxed' || !!this.settings['theme.darkMode'] ? 'dark' : 'light'
  },

  '.layout-boxed .sidebar-brand': {
    addClass: ['sidebar-brand-dark', 'bg-dark'],
    removeClass: ['bg-primary-pickled-bluewood', 'bg-dark-blue', 'bg-dark-purple', 'bg-black']
  },

  '.js-update-chart-line': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'primary' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-area': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:primary' },
      { 'name': 'data-chart-line-background-opacity', 'value': '0.1' }
    ]
  },
  '.js-update-chart-bar': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'gradient:primary' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '#locationDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'teal;primary;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
    ]
  },
  '#attendanceDoughnutChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'primary;teal;gray.700;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '#visitsByDeviceChart': {
    setAttribute: [
      { 'name': 'data-chart-line-background-color', 'value': 'teal;gray.300' },
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
      { 'name': 'data-chart-line-background-color', 'value': 'teal;gray' },
      { 'name': 'data-chart-line-background-opacity', 'value': '1' }
    ]
  },
  '.js-update-chart-line-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'teal' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },
  '.js-update-chart-line-2nd-accent': {
    setAttribute: [
      { 'name': 'data-chart-line-border-color', 'value': 'primary,teal' },
      { 'name': 'data-chart-line-border-opacity', 'value': '1' },
    ]
  },

  /////////////////
  // dodger blue //
  /////////////////
  
  '.bg-primary-dodger-blue': {
    addClass: ['bg-primary'],
    removeClass: ['bg-primary-dodger-blue']
  },
  '.bg-primary-pickled-bluewood': {
    addClass: ['bg-dark'],
    removeClass: ['bg-primary-pickled-bluewood']
  },
  '.bg-accent-pickled-bluewood': {
    addClass: ['bg-accent'],
    removeClass: ['bg-accent-pickled-bluewood']
  },
  '.bg-accent-dodger-blue': {
    addClass: ['bg-accent'],
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
    addClass: ['bg-primary'],
    removeClass: ['bg-primary-purple']
  },
  '.bg-primary-yellow': {
    addClass: ['bg-primary'],
    removeClass: ['bg-primary-yellow']
  },
  '.bg-primary-red': {
    addClass: ['bg-primary'],
    removeClass: ['bg-primary-red']
  },
  '.bg-accent-yellow': {
    addClass: ['bg-accent'],
    removeClass: ['bg-accent-yellow']
  },
  '.bg-accent-red': {
    addClass: ['bg-accent'],
    removeClass: ['bg-accent-red']
  },

  /////////////////
  // blue dodger //
  /////////////////

  '.border-left-primary-dodger-blue': {
    addClass: ['border-left-primary'],
    removeClass: ['border-left-primary-dodger-blue']
  },
  '.border-left-accent-pickled-bluewood': {
    addClass: ['border-left-accent'],
    removeClass: ['border-left-accent-pickled-bluewood']
  },

  '.border-left-primary-purple': {
    addClass: ['border-left-primary'],
    removeClass: ['border-left-primary-purple']
  },
  '.border-left-primary-yellow': {
    addClass: ['border-left-primary'],
    removeClass: ['border-left-primary-yellow']
  },
  '.border-left-primary-red': {
    addClass: ['border-left-primary'],
    removeClass: ['border-left-primary-red']
  },
  '.border-left-accent-yellow': {
    addClass: ['border-left-accent'],
    removeClass: ['border-left-accent-yellow']
  },
  '.border-left-accent-red': {
    addClass: ['border-left-accent'],
    removeClass: ['border-left-accent-red']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.alert-accent-dodger-blue': {
    addClass: ['alert-accent'],
    removeClass: ['alert-accent-dodger-blue']
  },
  '.alert-primary-dodger-blue': {
    addClass: ['alert-primary'],
    removeClass: ['alert-primary-dodger-blue']
  },
  '.alert-soft-primary-dodger-blue': {
    addClass: ['alert-soft-primary'],
    removeClass: ['alert-soft-primary-dodger-blue']
  },

  '.alert-primary-purple': {
    addClass: ['alert-primary'],
    removeClass: ['alert-primary-purple']
  },
  '.alert-primary-yellow': {
    addClass: ['alert-primary'],
    removeClass: ['alert-primary-yellow']
  },
  '.alert-primary-red': {
    addClass: ['alert-primary'],
    removeClass: ['alert-primary-red']
  },
  '.alert-accent-red': {
    addClass: ['alert-accent'],
    removeClass: ['alert-accent-red']
  },
  '.alert-accent-yellow': {
    addClass: ['alert-accent'],
    removeClass: ['alert-accent-yellow']
  },
  '.alert-soft-primary-purple': {
    addClass: ['alert-soft-primary'],
    removeClass: ['alert-soft-primary-purple']
  },
  '.alert-soft-primary-yellow': {
    addClass: ['alert-soft-primary'],
    removeClass: ['alert-soft-primary-yellow']
  },
  '.alert-soft-primary-red': {
    addClass: ['alert-soft-primary'],
    removeClass: ['alert-soft-primary-red']
  },
  '.alert-soft-accent-yellow': {
    addClass: ['alert-soft-accent'],
    removeClass: ['alert-soft-accent-yellow']
  },
  '.alert-soft-accent-red': {
    addClass: ['alert-soft-accent'],
    removeClass: ['alert-soft-accent-red']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.text-primary-dodger-blue': {
    addClass: ['text-primary'],
    removeClass: ['text-primary-dodger-blue']
  },
  '.text-accent-pickled-bluewood': {
    addClass: ['text-accent'],
    removeClass: ['text-accent-pickled-bluewood']
  },

  '.text-primary-purple': {
    addClass: ['text-primary'],
    removeClass: ['text-primary-purple']
  },
  '.text-primary-yellow': {
    addClass: ['text-primary'],
    removeClass: ['text-primary-yellow']
  },
  '.text-primary-red': {
    addClass: ['text-primary'],
    removeClass: ['text-primary-red']
  },
  '.text-accent-yellow': {
    addClass: ['text-accent'],
    removeClass: ['text-accent-yellow']
  },
  '.text-accent-red': {
    addClass: ['text-accent'],
    removeClass: ['text-accent-red']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.btn-accent-dodger-blue': {
    addClass: ['btn-accent'],
    removeClass: ['btn-accent-dodger-blue']
  },
  '.btn-primary-dodger-blue': {
    addClass: ['btn-primary'],
    removeClass: ['btn-primary-dodger-blue']
  },

  '.btn-accent-red': {
    addClass: ['btn-accent'],
    removeClass: ['btn-accent-red']
  },
  '.btn-accent-yellow': {
    addClass: ['btn-accent'],
    removeClass: ['btn-accent-yellow']
  },
  '.btn-primary-yellow': {
    addClass: ['btn-primary'],
    removeClass: ['btn-primary-yellow']
  },
  '.btn-primary-purple': {
    addClass: ['btn-primary'],
    removeClass: ['btn-primary-purple']
  },
  '.btn-primary-red': {
    addClass: ['btn-primary'],
    removeClass: ['btn-primary-red']
  },

  /////////////////
  // dodger blue //
  /////////////////

  '.badge-accent-dodger-blue': {
    addClass: ['badge-accent'],
    removeClass: ['badge-accent-dodger-blue']
  },

  '.badge-accent-red': {
    addClass: ['badge-accent'],
    removeClass: ['badge-accent-red']
  },
  '.badge-accent-yellow': {
    addClass: ['badge-accent'],
    removeClass: ['badge-accent-yellow']
  }
}