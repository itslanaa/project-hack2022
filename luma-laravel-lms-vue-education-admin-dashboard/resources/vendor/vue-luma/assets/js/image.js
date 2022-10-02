import { handler } from 'dom-factory'

export const imageComponent = () => ({

  /**
   * Public properties.
   * @type {Object}
   */
  properties: {

    /**
     * Background position.
     * @type {Object}
     */
    position: {
      reflectToAttribute: true,
      value: 'center'
    },

    /**
     * Image height.
     * @type {Object}
     */
    height: {
      reflectToAttribute: true,
      value: 'auto'
    },
  },

  /**
   * Mask element.
   * @return {HTMLElement}
   */
  get image () {
    return this.element.querySelector('img')
  },

  _reset () {
    if (!this.image) {
      return
    }
    this.element.style.display = 'block'
    this.element.style.position = 'relative'
    this.element.style.overflow = 'hidden'
    this.element.style.backgroundImage = `url(${ this.image.src })`
    this.element.style.backgroundSize = 'cover'
    this.element.style.backgroundPosition = this.position
    this.element.style.height = `${ this.height === 'auto' ? this.image.offsetHeight : this.height }px`
    this.image.style.visibility = 'hidden'
    // this.element.removeChild(this.image)
  }
})

handler.register('image', imageComponent)