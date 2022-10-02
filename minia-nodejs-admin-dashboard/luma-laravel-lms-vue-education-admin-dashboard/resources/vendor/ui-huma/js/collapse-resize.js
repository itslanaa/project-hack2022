import { mediaQuery } from 'material-design-kit'

const collapseResizeComponent = () => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Ignore the `responsiveWidth` option and force the narrow layout on any screen size.
     * @type {Object}
     */
    forceNarrow: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * The maximum viewport width for which the narrow layout is enabled.
     * @type {Object}
     */
    responsiveWidth: {
      reflectToAttribute: true,
      value: '767px'
    },
  },

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_onQueryMatches(mediaQuery.queryMatches)'
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
    return this.forceNarrow ? '(min-width: 0px)' : `(max-width: ${ this.responsiveWidth })`
  },

  _onQueryMatches (value) {
    $(this.element).collapse(value ? 'hide' : 'show')
    document.querySelector(`[data-target="#${ this.element.id }"]`).style.display = value ? 'block' : 'none'
  },

  /**
   * Initialize component
   */
  init () {
    this.mediaQuery.init()
  },

  /**
   * Destroy component
   */
  destroy () {
    this.mediaQuery.destroy()
  }
})

domFactory.handler.register('collapse-resize', collapseResizeComponent)