const checkSelectedRow = () => ({
  listeners: [
    '_onChange(change)',
  ],

  get $target () {
    return $(this.element).closest('tr')
  },

  _onChange (e) {
    $(this.$target)[e.target.checked ? 'addClass' : 'removeClass']('selected')
  }
})

domFactory.handler.register('check-selected-row', checkSelectedRow)