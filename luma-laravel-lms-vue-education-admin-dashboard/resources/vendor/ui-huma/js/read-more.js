const readMoreComponent = () => ({
  get separator () {
    return this.element.querySelector('.page-separator')
  },
  get paragraph () {
    return this.element.querySelector('.page-separator-mask__item') ||
      this.element.querySelector('p')
  },
  get mask () {
    return this.element.querySelector('.page-separator-mask__content')
  },
  _reset () {
    let paddingTop = parseInt(window.getComputedStyle(this.element).paddingTop, 10)
    let maskHeight = this.mask.offsetHeight
    let paragraphBottom = this.paragraph.offsetHeight + this.paragraph.offsetTop
    this.element.style.height = `${ paddingTop + paragraphBottom + maskHeight }px`
  }
})

domFactory.handler.register('read-more', readMoreComponent)