(function() {
  'use strict';

  // popover manual + click trigger issue temporary fix
  // see https://github.com/twbs/bootstrap/issues/16732
  
  $('body').on('shown.bs.popover', function (e) {
    $(e.target).data('bs.popover')._activeTrigger.click = true
  })

  $('body').on('hidden.bs.popover', function (e) {
    $(e.target).data('bs.popover')._activeTrigger.click = false
  })

  const isDrawerLayout = !!document.querySelector('.mdk-drawer-layout__content')
  const isHeaderLayout = !!document.querySelector('.mdk-header-layout__content')
  const isSubLayout = !!document.querySelector('.mdk-drawer-layout__content .mdk-drawer-layout__content')

  let container = 'body'
  container = isDrawerLayout ? '.mdk-drawer-layout__content' : container
  container = isHeaderLayout ? '.mdk-header-layout__content' : container
  container = isSubLayout ? '.mdk-drawer-layout__content .mdk-drawer-layout__content' : container

  var popoverOptions = {
    trigger: 'click',
    html: true,
    container,
    content: function () {
      return $(this).next('.popoverContainer').html()
    },
    template: '<div class="popover popover-lg" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }

  const TAB_KEYCODE              = 9 // KeyboardEvent.which value for tab key
  const RIGHT_MOUSE_BUTTON_WHICH = 3 // MouseEvent.which value for the right button (assuming a right-handed mouse)

  function closePopover() {
    if (this.mdkReveal) {
      this.mdkReveal.close()
    }
    if (this.overlay) {
      this.overlay.hide()
    }
  }

  function clearPopovers(event) {
    if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH ||
      event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
      return
    }

    $('[data-toggle="popover"][data-trigger="click"]')
      .popover('hide')
      .each(closePopover)
  }

  const DATA_KEY  = 'bs.popover'
  const DATA_API_KEY = '.data-api'
  const EVENT_KEY = `.${DATA_KEY}`

  const Event = {
    CLICK            : `click${EVENT_KEY}`,
    CLICK_DATA_API   : `click${EVENT_KEY}${DATA_API_KEY}`,
    KEYUP_DATA_API   : `keyup${EVENT_KEY}${DATA_API_KEY}`
  }

  $(document)
    .on(`${Event.CLICK_DATA_API} ${Event.KEYUP_DATA_API}`, clearPopovers)

  $('[data-toggle="popover"][data-trigger="click"]')
    .popover(popoverOptions)
    .click(function(e){
      e.preventDefault()
      e.stopPropagation()
      $('[data-toggle="popover"]').not(this)
        .popover('hide')
        .each(closePopover)
    })

  $('[data-toggle="popover"][data-trigger="hover"]')
    .popover(popoverOptions)
    .on('mouseenter', function () {
      var _this = this
      $(this).popover('show')
      $('.popover').on('mouseleave', function () {
        $(_this).popover('hide')
      })
    })
    .on('mouseleave', function () {
      var _this = this
      setTimeout(function () {
        if (!$('.popover:hover').length) {
          $(_this).popover('hide');
        }
      }, 300)
    })

  var popover = $('[data-toggle="popover"][data-popover-onload-show]')
  popover.popover('show')

  window.addEventListener('load', function () {
    popover.popover('update')
  })

})()