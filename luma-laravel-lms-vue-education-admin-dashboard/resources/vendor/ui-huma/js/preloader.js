(function() {
  'use strict';

  // PRELOADER
  window.addEventListener('load', function() {
    $('.preloader').fadeOut()
    domFactory.handler.upgradeAll()
  })

})()