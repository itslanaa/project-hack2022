import darkTheme from './darkTheme'
import lightTheme from './lightTheme'

import darkDodgerBlueTheme from './darkDodgerBlueTheme'
import lightDodgerBlueTheme from './lightDodgerBlueTheme'

import blackTheme from './blackTheme'
import lightRedTheme from './lightRedTheme'

import darkBlueTheme from './darkBlueTheme'
import lightYellowTheme from './lightYellowTheme'

import darkPurpleTheme from './darkPurpleTheme'
import lightPurpleTheme from './lightPurpleTheme'

export default {
  props: {
    layoutActive: {
      type: String,
      required: true
    },
    layoutLocation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      buttonAlign: 'right',
      drawerAlign: 'end'
    }
  },
  computed: {
    options() {
      return [
        {
          id: 'theme',
          title: 'Theme',
          children: [
            {
              id: 'theme',
              title: 'Theme',
              component: 'form-image-group',
              value: 'light',
              options: [
                {
                  text: 'Dark Dodger Blue',
                  image: 'assets/images/theme-dark-dodger-blue.png',
                  value: 'dark-dodger-blue',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Light Dodger Blue',
                  image: 'assets/images/theme-light-dodger-blue.png',
                  value: 'light-dodger-blue',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Dark Teal',
                  value: 'dark',
                  image: 'assets/images/theme-dark-teal.png'
                },
                {
                  text: 'Light Teal',
                  image: 'assets/images/theme-light-teal.png',
                  value: 'light',
                  selected: true,
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Dark Blue',
                  image: 'assets/images/theme-dark-blue.png',
                  value: 'dark-blue',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Light Yellow',
                  image: 'assets/images/theme-light-yellow.png',
                  value: 'light-yellow',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Dark Purple',
                  image: 'assets/images/theme-dark-purple.png',
                  value: 'dark-purple',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Light Purple',
                  image: 'assets/images/theme-light-purple.png',
                  value: 'light-purple',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Black',
                  image: 'assets/images/theme-black.png',
                  value: 'black',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Light Red',
                  image: 'assets/images/theme-light-red.png',
                  value: 'light-red',
                  disabled: !!this.settings['theme.darkMode']
                }
              ]
            },
            {
              id: 'darkMode',
              title: 'Dark Mode',
              component: 'custom-checkbox-toggle',
              options: [
                {
                  value: true
                },
                {
                  value: false,
                  selected: true
                }
              ]
            }
          ]
        },
        {
          id: 'layout',
          title: 'Layout',
          children: [
            {
              id: 'layout',
              title: 'Layout',
              component: 'form-image-group',
              cookies: false,
              value: 'compact',
              options: [
                {
                  text: 'Compact Layout',
                  image: 'assets/images/compact-layout.png',
                  value: 'compact',
                  selected: true
                },
                {
                  text: 'Boxed Layout',
                  image: 'assets/images/boxed-layout.png',
                  value: 'boxed'
                },
                {
                  text: 'Mini Layout',
                  image: 'assets/images/mini-layout.png',
                  value: 'mini'
                },
                {
                  text: 'App Layout',
                  value: 'app',
                  image: 'assets/images/app-layout.png'
                },
                {
                  text: 'Sticky Layout',
                  value: 'sticky',
                  image: 'assets/images/sticky-layout.png'
                },
                {
                  text: 'Fixed',
                  image: 'assets/images/fixed-layout.png',
                  value: 'default'
                }
              ]
            },
            {
              id: 'rtl',
              title: 'RTL',
              component: 'custom-checkbox-toggle',
              options: [
                {
                  value: true
                },
                {
                  value: false,
                  selected: true
                }
              ]
            }
          ]
        },
        {
          id: 'type',
          title: 'Type',
          children: [
            {
              id: 'headingsFontFamily',
              title: 'Headings Font Family',
              component: 'b-form-select',
              options: [
                {
                  text: 'Exo 2',
                  value: 'exo2',
                  selected: true
                },
                {
                  text: 'Lato',
                  value: 'lato'
                },
                {
                  text: 'Oswald',
                  value: 'oswald'
                }
              ]
            }
          ]
        },
        {
          id: 'mainDrawer',
          title: 'Main Drawer',
          children: [
            {
              id: 'theme',
              visible: false,
              options: [
                { value: 'light' },
                { value: 'dark' }
              ]
            },
            {
              id: 'align',
              title: 'Align',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Start',
                  value: 'start',
                  selected: true
                },
                {
                  text: 'End',
                  value: 'end'
                }
              ]
            }
          ]
        },
        {
          id: 'messagesDrawer',
          title: 'Messages Drawer',
          visible: false,
          children: [
            {
              id: 'theme',
              options: [
                { value: 'light' },
                { value: 'dark' }
              ]
            }
          ]
        },
        {
          id: 'messagesNavbar',
          title: 'Messages Navbar',
          visible: false,
          children: [
            {
              id: 'theme',
              options: [
                { value: 'light' },
                { value: 'dark' }
              ]
            }
          ]
        },
        {
          id: 'mainNavbar',
          title: 'Main Navbar',
          visible: false,
          children: [
            {
              id: 'navbar',
              title: 'Main Navbar',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Transparent',
                  value: 'transparent',
                  selected: true
                },
                {
                  text: 'Light',
                  value: 'light'
                },
                {
                  text: 'Dark Teal',
                  value: 'dark'
                },
                {
                  text: 'Dark Blue',
                  value: 'dark-blue'
                },
                {
                  text: 'Dark Purple',
                  value: 'dark-purple'
                },
                {
                  text: 'Black',
                  value: 'black'
                },
                {
                  text: 'Dark Dodger Blue',
                  value: 'dark-dodger-blue'
                },
                {
                  text: 'Light Dodger Blue',
                  value: 'light-dodger-blue'
                }
              ]
            }
          ]
        },
        {
          id: 'secondaryNavbar',
          title: 'Secondary Navbar',
          visible: false,
          children: [
            {
              id: 'theme',
              title: 'Theme',
              options: [
                {
                  value: 'light',
                  selected: true
                },
                {
                  value: 'dark'
                }
              ]
            }
          ]
        },
      ]
    },
    config() {

      let theme
      try {
        theme = this.settings['theme.theme']
      } catch(e) {
      }

      let navbarTransparentLogo = 'assets/images/logo/accent-teal-100@2x.png'
      
      if (theme === 'dark-blue' || theme === 'light-yellow') {
        navbarTransparentLogo = 'assets/images/logo/accent-yellow-100@2x.png'
      }
      if (theme === 'black' || theme === 'light-red') {
        navbarTransparentLogo = 'assets/images/logo/accent-red-100@2x.png'
      }
      if (theme === 'light-purple') {
        navbarTransparentLogo = 'assets/images/logo/purple-100@2x.png'
      }
      if (theme === 'dark-purple') {
        navbarTransparentLogo = 'assets/images/logo/white-100@2x.png'
      }
      if (theme === 'light-dodger-blue' || theme === 'dark-dodger-blue') {
        navbarTransparentLogo = 'assets/images/logo/dodger-blue-100@2x.png'
      }

      return {
        'layout.layout': function(layout) {
          if (layout !== this.layoutActive) {
            location = this.layoutLocation[layout]
          }
        },
        'layout.rtl': function(rtl) {
          document.querySelector('html').setAttribute('dir', rtl ? 'rtl' : 'ltr')

          ;[...document.querySelectorAll('.mdk-drawer')]
            .forEach(node => this.try(node, function() {
              this.mdkDrawer._resetPosition()
            }))

          ;[...document.querySelectorAll('.mdk-drawer-layout')]
            .forEach(node => this.try(node, function() {
              this.mdkDrawerLayout._resetLayout()
            }))
        },
        'theme.darkMode': function(darkMode) {
          document.querySelector('html').classList[darkMode ? 'add' : 'remove']('dark-mode')

          if (darkMode && this.settings['theme.theme'] !== 'dark') {
            this.settings['theme.theme'] = 'dark'
          }

          this.settings['messagesDrawer.theme'] = darkMode ? 'dark' : 'light'
          this.settings['messagesNavbar.theme'] = darkMode ? 'dark' : 'light'
          this.settings['secondaryNavbar.theme'] = darkMode ? 'dark' : 'light'

          if (darkMode) {
            this.applyElements({
              '.chart-canvas': {
                setAttribute: [
                  { 'name': 'data-chart-dark-mode', 'value': '1' }
                ]
              }
            })
          }
          else {
            this.applyElements({
              '.chart-canvas': {
                removeAttribute: [ 'data-chart-dark-mode' ]
              }
            })
          }
        },
        'mainDrawer.align': function(align) {
          this.try(document.querySelector('#default-drawer'), function() {
            this.mdkDrawer.align = align
          })
        },
        'type.headingsFontFamily': function(headingsFontFamily) {
          ;[
            'headings-family-lato', 
            'headings-family-exo2', 
            'headings-family-oswald'
          ].forEach(className => {
            document.querySelector('body').classList.remove(className)
          })
          document.querySelector('body').classList.add(`headings-family-${headingsFontFamily}`)
        },
        'messagesDrawer.theme': {
          'light': {
            '#messages-drawer .sidebar': {
              addClass: ['sidebar-light', 'bg-white'],
              removeClass: ['sidebar-dark', 'bg-body']
            },
            '#messages-drawer .bg-black': {
              addClass: ['bg-light'],
              removeClass: ['bg-black']
            }
          },
          'dark': {
            '#messages-drawer .sidebar': {
              addClass: ['sidebar-dark', 'bg-body'],
              removeClass: ['sidebar-light', 'bg-white']
            },
            '#messages-drawer .bg-light': {
              addClass: ['bg-black'],
              removeClass: ['bg-light']
            }
          }
        },
        'messagesNavbar.theme': {
          'light': {
            '#messages-navbar': {
              addClass: ['navbar-light', 'bg-white'],
              removeClass: ['navbar-dark', 'bg-body']
            }
          },
          'dark': {
            '#messages-navbar ': {
              addClass: ['navbar-dark', 'bg-body'],
              removeClass: ['navbar-light', 'bg-white']
            }
          }
        },
        'mainDrawer.theme': {
          'light': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light'],
              removeClass: ['sidebar-dark', 'bg-dark', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-dark-dodger-blue', 'sidebar-light-red', 'sidebar-light-yellow', 'sidebar-light-purple', 'sidebar-light-dodger-blue']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'light-red': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-red-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light', 'sidebar-light-red'],
              removeClass: ['sidebar-dark', 'bg-dark', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-dark-dodger-blue', 'sidebar-light-yellow', 'sidebar-light-purple', 'sidebar-light-dodger-blue']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'light-yellow': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-yellow-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light', 'sidebar-light-yellow'],
              removeClass: ['sidebar-dark', 'bg-dark', 'bg-dark-blue', 'bg-dark-purple', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-dark-dodger-blue', 'sidebar-light-red', 'sidebar-light-purple', 'sidebar-light-dodger-blue']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'light-purple': {
            '#default-drawer .sidebar-brand-icon': {
              src: navbarTransparentLogo,
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light', 'sidebar-light-purple'],
              removeClass: ['sidebar-dark', 'bg-dark', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-dark-dodger-blue', 'sidebar-light-yellow', 'sidebar-light-red', 'sidebar-light-dodger-blue']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'dark': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark', 'bg-dark'],
              removeClass: ['sidebar-light', 'sidebar-light-red', 'sidebar-light-yellow', 'sidebar-light-purple', 'sidebar-light-dodger-blue', 'bg-white', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-dark-dodger-blue']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'black': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-red-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-black'],
              removeClass: ['sidebar-dark', 'sidebar-dark-blue', 'sidebar-dark-purple', 'sidebar-dark-dodger-blue', 'sidebar-light', 'sidebar-light-purple', 'sidebar-light-yellow', 'sidebar-light-red', 'sidebar-light-dodger-blue', 'bg-white', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'dark-purple': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/white-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark-purple'],
              removeClass: ['sidebar-dark', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-dark-dodger-blue', 'sidebar-light', 'sidebar-light-purple', 'sidebar-light-yellow', 'sidebar-light-red', 'sidebar-light-dodger-blue', 'bg-white', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'dark-blue': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-yellow-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark-blue'],
              removeClass: ['sidebar-dark', 'sidebar-dark-purple', 'sidebar-black', 'sidebar-dark-dodger-blue', 'sidebar-light', 'sidebar-light-purple', 'sidebar-light-dodger-blue', 'bg-white', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'dark-dodger-blue': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/dodger-blue-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark-dodger-blue'],
              removeClass: ['sidebar-dark', 'sidebar-dark-purple', 'sidebar-black', 'sidebar-light', 'sidebar-light-purple', 'sidebar-light-dodger-blue', 'bg-white', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'light-dodger-blue': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/dodger-blue-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light', 'sidebar-light-dodger-blue'],
              removeClass: ['sidebar-dark', 'bg-dark', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-dark-dodger-blue', 'sidebar-light-yellow', 'sidebar-light-red']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          }
        },
        'theme.theme': {
          'light': lightTheme,
          'light-dodger-blue': lightDodgerBlueTheme,
          'dark-dodger-blue': darkDodgerBlueTheme,
          'light-red': lightRedTheme,
          'light-yellow': lightYellowTheme,
          'light-purple': lightPurpleTheme,
          'dark': darkTheme,
          'black': blackTheme,
          'dark-purple': darkPurpleTheme,
          'dark-blue': darkBlueTheme
        },
        'secondaryNavbar.theme': {
          'light': {
            '#secondary-navbar': {
              addClass: ['navbar-light', 'bg-white'],
              removeClass: ['navbar-dark', 'bg-body', 'border-top']
            }
          },
          'dark': {
            '#secondary-navbar': {
              addClass: ['navbar-dark', 'bg-body', 'border-top'],
              removeClass: ['navbar-light', 'bg-white']
            }
          }
        },
        'mainNavbar.navbar': {
          'light': {
            '#default-navbar .navbar-brand img': {
              src: navbarTransparentLogo,
            },
            '.layout-default #default-navbar': {
              addClass: ['border-bottom-2']
            },
            '#default-navbar': {
              addClass: ['navbar-light', 'bg-white'],
              removeClass: ['navbar-dark', 'bg-dark', 'bg-body', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'navbar-dark-dodger-blue', 'bg-dark-blue', 'bg-dark-purple', 'navbar-light-dodger-blue']
            }
          },
          'transparent': {
            '#default-navbar .navbar-brand img': {
              src: navbarTransparentLogo,
            },
            '.layout-default #default-navbar': {
              addClass: ['border-bottom-2']
            },
            '#default-navbar': {
              addClass: ['navbar-light', 'bg-body'],
              removeClass: ['navbar-dark', 'bg-dark', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'navbar-dark-dodger-blue', 'bg-dark-blue', 'bg-dark-purple', 'navbar-light-dodger-blue']
            }
          },
          'dark': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'bg-dark'],
              removeClass: ['navbar-light', 'navbar-light-dodger-blue', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'navbar-dark-dodger-blue', 'bg-white', 'bg-body', 'border-bottom-2']
            }
          },
          'dark-mode': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'bg-body'],
              removeClass: ['navbar-light', 'navbar-light-dodger-blue', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'navbar-dark-dodger-blue', 'bg-white', 'border-bottom-2']
            }
          },
          'dark-blue': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-yellow-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'navbar-dark-blue'],
              removeClass: ['navbar-light', 'navbar-light-dodger-blue', 'bg-dark', 'navbar-dark-purple', 'navbar-black', 'navbar-dark-dodger-blue', 'bg-white', 'bg-body', 'border-bottom-2']
            }
          },
          'dark-purple': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/white-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'navbar-dark-purple'],
              removeClass: ['navbar-light', 'navbar-light-dodger-blue', 'bg-dark', 'navbar-dark-blue', 'navbar-black', 'navbar-dark-dodger-blue', 'bg-white', 'bg-body', 'border-bottom-2']
            }
          },
          'black': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-red-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'navbar-black'],
              removeClass: ['navbar-light', 'navbar-light-dodger-blue', 'bg-dark', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-dark-dodger-blue', 'bg-white', 'bg-body', 'border-bottom-2']
            }
          },
          'light-dodger-blue': {
            '#default-navbar .navbar-brand img': {
              src: navbarTransparentLogo,
            },
            '.layout-default #default-navbar': {
              addClass: ['border-bottom-2']
            },
            '#default-navbar': {
              addClass: ['navbar-light', 'bg-white', 'navbar-light-dodger-blue'],
              removeClass: ['navbar-dark', 'bg-dark', 'bg-body', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'bg-dark-blue', 'bg-dark-purple', 'navbar-dark-dodger-blue']
            }
          },
          'dark-dodger-blue': {
            '#default-navbar .navbar-brand img': {
              src: navbarTransparentLogo,
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'navbar-dark-dodger-blue'],
              removeClass: ['navbar-light', 'bg-dark', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'bg-white', 'bg-body', 'border-bottom-2', 'navbar-light-dodger-blue']
            }
          },
        }
      }
    },
    computedOptions() {
      const options = JSON.parse(JSON.stringify(this.options))
      options.map(option => {
        option.children
          .filter(group => group.cookies === false)
          .map(group => {
            if (this.layoutActive) {
              group.options.map(go => go.selected = go.value === this.layoutActive)
            } else {
              group.options.map(go => go.selected = go.value === group.value)
            }
          })
      })

      return options
    },
    localDrawerAlign() {
      let drawerAlign = this.drawerAlign
      try {
        drawerAlign = this.settings['mainDrawer.align'] === 'end' ? 'start' : 'end'
      } catch(e) {}

      return drawerAlign
    },
    localButtonAlign() {
      let buttonAlign = this.buttonAlign
      
      try {
        buttonAlign = this.settings['mainDrawer.align'] === 'end' ? 'left' : 'right'
        if (this.settings['layout.rtl']) {
          buttonAlign = this.settings['mainDrawer.align'] === 'end' ? 'right' : 'left'
        }
      } catch(e) {}

      return buttonAlign
    }
  },
  created() {
    this.listenOnRoot('fm:settings:state', this.onUpdate)
  },
  methods: {
    try(node, callback) {
      try {
        callback.call(node)
      } catch(e) {
        node.addEventListener('domfactory-component-upgraded', callback)
      }
    }
  }
}
