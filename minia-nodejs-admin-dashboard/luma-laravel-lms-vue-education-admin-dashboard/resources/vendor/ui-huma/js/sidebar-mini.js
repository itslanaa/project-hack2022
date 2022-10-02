import { mediaQuery } from 'material-design-kit'

const TAB_KEYCODE              = 9 // KeyboardEvent.which value for tab key
const RIGHT_MOUSE_BUTTON_WHICH = 3 // MouseEvent.which value for the right button (assuming a right-handed mouse)

const sidebarMiniComponent = () => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * The opened state of the drawer.
     * @type {Object}
     */
    opened: {
      reflectToAttribute: true,
      type: Boolean,
      value: false
    },

    /**
     * The maximum viewport width for which the narrow layout is enabled.
     * @type {Object}
     */
    responsiveWidth: {
      reflectToAttribute: true,
      value: '554px'
    },

    layout: {
      reflectToAttribute: true,
      value: 'mini'
    }
  },

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    'document._closeHandler(click)',
    '_openHandler(click)'
  ],

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_onQueryMatches(mediaQuery.queryMatches)',
    '_onStateChange(opened)'
  ],

  // The mediaQuery listener
  _mediaQuery: null,

  /**
   * The mediaQuery listener
   * @return {Object}
   */
  get mediaQuery () {
    if (!this._mediaQuery) {
      this._mediaQuery = mediaQuery(this.responsiveMediaQuery) 
    }
    return this._mediaQuery
  },

  /**
   * Computed media query value passed to the mediaQuery listener
   * @return {String}
   */
  get responsiveMediaQuery () {
    return `(max-width: ${ this.responsiveWidth })`
  },

  _onQueryMatches (value) {
    if (this.opened && value) {
      this.opened = false
    }
  },

  _onStateChange(state) {
    document.querySelector(`.layout-${this.layout}`).classList[state ? 'add' : 'remove'](`layout-${this.layout}--open`)
  },

  _closeHandler(event) {
    if (this.opened) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH ||
        event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return
      }

      if ($.contains(this.element, event.target)) {
        return
      }

      event.preventDefault()
      event.stopPropagation()

      this.opened = false
    }
  },

  _openHandler (e) {
    if (!this.opened) {
      e.stopPropagation()
      this.opened = true
    }
  },

  /**
   * Initialize component
   */
  init () {
    this.mediaQuery.init()
    this._onStateChange(this.opened)
  },

  /**
   * Destroy component
   */
  destroy () {
    this.mediaQuery.destroy()
  }
})

domFactory.handler.register('sidebar-mini', sidebarMiniComponent)