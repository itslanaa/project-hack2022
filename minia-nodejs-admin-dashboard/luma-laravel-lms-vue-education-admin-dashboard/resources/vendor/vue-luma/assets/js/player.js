import { handler } from 'dom-factory'

export const playerComponent = () => ({
  listeners: [
    'button.onClick(click)'
  ],

  get button () {
    return this.element.querySelector('.player__content')
  },

  play () {
    this.element.querySelector('.player__embed').classList.remove('d-none')
    this.element.querySelector('.player__embed iframe').src += "&autoplay=1"
  },

  onClick (e) {
    e.preventDefault()
    this.play()
  }
})

handler.register('player', playerComponent)