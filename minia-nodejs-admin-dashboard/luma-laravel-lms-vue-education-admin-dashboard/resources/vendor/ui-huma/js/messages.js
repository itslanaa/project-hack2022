(function() {
  'use strict';

  const jsrender = require('jsrender')

  const scroll = () => {
    const element = document.querySelector('.app-messages__container [data-perfect-scrollbar]')
    element.scrollTop = element.scrollHeight - element.offsetHeight - 16
  }

  ;['DOMContentLoaded', 'load'].forEach(function (e) {
    window.addEventListener(e, scroll)
  })

  const addMessage = (message) => {
    const messages = document.querySelector('#messages')
    const template = jsrender.templates('#template-message')
    const messageNodeText = template.render({
      name: 'Laza Bogdan',
      avatar: 'assets/images/people/110/guy-6.jpg',
      date: 'just now',
      message
    })

    let messageNode = document.createRange().createContextualFragment(messageNodeText)
    messages.appendChild(messageNode)
  }

  document.querySelector('#message-reply').addEventListener('submit', function(e) {
    e.preventDefault()
    const field = this.querySelector('input')

    addMessage(field.value)
    field.value = ''

    scroll()
  })

})()