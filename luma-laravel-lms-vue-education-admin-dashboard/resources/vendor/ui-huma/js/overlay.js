const isTouch = () => {
  return ('ontouchstart' in window)
}

const overlayComponent = () => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Show on load.
     * @type {Object}
     */
    overlayOnloadShow: {
      type: Boolean,
      reflectToAttribute: true
    },

    /**
     * Toggle reveal on click/mouseenter/mouseleave or touchstart/touchend.
     * click|hover
     * @type {Object}
     */
    trigger: {
      value: 'hover',
      reflectToAttribute: true
    },
  },

  /**
   * Property change observers.
   * @type {Array}
   */
  observers: [
    '_onChange(shown)'
  ],

  /**
   * Event listeners.
   * @type {Array}
   */
  listeners: [
    '_onEnter(mouseenter, touchstart)',
    '_onLeave(mouseleave, touchend)',
    '_onClick(click)'
  ],

  /**
   * Show the overlay.
   */
  show () {
    this.shown = true
  },

  /**
   * Hide the overlay.
   */
  hide () {
    this.shown = false
  },

  /**
   * Toggle the shown state.
   */
  toggle () {
    this.shown = !this.shown
  },

  _onChange () {
    if (this.shown) {
      return this.element.classList.add('overlay--show')
    }
    this.element.classList.remove('overlay--show')
  },

  /**
   * Handle `mouseenter` and `touchstart` events.
   * @param  {MouseEvent|TouchEvent} event
   */
  _onEnter () {
    if (this.trigger === 'hover') {
      this.show()
    }
  },

  /**
   * Handle `mouseleave` and `touchend` events.
   * @param  {MouseEvent|TouchEvent} event
   */
  _onLeave () {
    if (this.trigger === 'hover') {
      this.hide()
    }
  },

  /**
   * Handle `click` event.
   * @param  {MouseEvent|TouchEvent} event
   */
  _onClick () {
    if (this.trigger === 'click') {
      this.toggle()
    }
  },

  init () {
    if (isTouch()) {
      this.element.classList.add('overlay--duserselect')
    }
  },

  _reset () {
    if (this.overlayOnloadShow && !this.shown) {
      this.show()
    }
  }
})

domFactory.handler.register('overlay', overlayComponent)