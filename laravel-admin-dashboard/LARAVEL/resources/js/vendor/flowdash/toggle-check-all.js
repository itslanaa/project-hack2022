const toggleCheckAllComponent = () => ({
  properties: {
    target: {
      reflectToAttribute: true
    },
  },

  listeners: [
    '_onClick(click)',
  ],

  /**
   * Fire a DOM Event on the HTMLElement
   * @param  {String} eventName The event name
   */
  dispatchEvent (eventName, element) {
    let event
    let bubbles = false
    if ('CustomEvent' in window && typeof window.CustomEvent === 'object') {
      try {
        event = new CustomEvent(eventName, {
          bubbles,
          cancelable: false
        }) 
      } 
      catch (e) {
        event = new this.CustomEvent_(eventName, {
          bubbles,
          cancelable: false
        })
      }
    }
    else {
      event = document.createEvent('Event')
      event.initEvent(eventName, bubbles, true)
    }
    element.dispatchEvent(event)
  },

  CustomEvent_ (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  },

  get $target () {
    return document.querySelector(this.target)
  },

  get $targets () {
    return this.$target.querySelectorAll('[type="checkbox"]')
  },

  _onClick (e) {
    if (this.element.type && this.element.type === 'checkbox') {
      this._checked = this.element.checked
    }
    else {
      this._checked = !this._checked
      e.preventDefault()
    }

    this.$targets.forEach(i => {
      i.checked = this._checked
      this.dispatchEvent('change', i)
    })
  }
})

domFactory.handler.register('toggle-check-all', toggleCheckAllComponent)