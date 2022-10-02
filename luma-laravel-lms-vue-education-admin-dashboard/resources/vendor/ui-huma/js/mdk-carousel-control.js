const mdkCarouselControl = () => ({
  properties: {
    slide: {
      reflectToAttribute: true,
      value: 'next'
    }
  },
  listeners: [
    '_onClick(click)'
  ],
  _onClick(e) {
    e.preventDefault()
    var target = document.querySelector(this.element.getAttribute('href'))
    if (target) {
      target.mdkCarousel[this.slide]()
    }
  }
})

domFactory.handler.register('mdk-carousel-control', mdkCarouselControl)