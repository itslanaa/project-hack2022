// import $ from 'jquery'

const DropdownDismissable = (() => {
  const NAME               = 'dropdownDismissable'
  const DATA_KEY           = 'bs.dropdown-dismissable'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  class DropdownDismissable {
    constructor(element) {
      Object.defineProperty(element, NAME, {
        configurable: true,
        writable: false,
        value: this
      })

      this._element = element
      this._dismiss = element.querySelector('[data-dismiss="dropdown"]')
      this._toggle = element.querySelector('[data-toggle="dropdown"]')
      this._init()
      this._addEventListeners()
    }

    _init() {
      $('.dropdown-menu', this._element).removeClass('show').removeAttr('style')
      if ($(this._element).hasClass('show')) {
        $(this._element).removeClass('show')
        $(this._toggle).dropdown('toggle')
      }
      this._element._closable = false
    }

    _addEventListeners() {
      this._dismiss.addEventListener('click', this.dismiss.bind(this))
    }

    _removeEventListeners() {
      this._dismiss.removeEventListener('click', this.dismiss.bind(this))
    }

    // Static jQuery Interface

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)
        if (!data) {
          data = new DropdownDismissable(this)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

    // Public

    dismiss(event) {
      this._element._closable = true
      if (!event) {
        $(this._toggle).dropdown('toggle')
      }
    }

    destroy() {
      this._removeEventListeners()

      $.removeData(this._element, DATA_KEY)
      $(this._element).dropdown('dispose')
      this._element = null
    }
  }

  $(document).on({
    'show.bs.dropdown': function() {
      this._closable = false
    },
    'hide.bs.dropdown': function() {
      return this._closable === undefined || this._closable !== false
    }
  }, '[data-dropdown-dismissable]')

  ////////////
  // jQuery //
  ////////////

  $.fn[NAME]             = DropdownDismissable._jQueryInterface
  $.fn[NAME].Constructor = DropdownDismissable
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return DropdownDismissable._jQueryInterface
  }

  ////////////////
  // Initialize //
  ////////////////
  
  $('[data-dropdown-dismissable]').dropdownDismissable()

  return DropdownDismissable

})($)

export default DropdownDismissable