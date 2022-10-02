(function() {
  'use strict';

  $('.dropdown[data-toggle="tooltip"]')
    .on('shown.bs.dropdown', function (e) {
      $(e.target)
        .tooltip('hide')
        .tooltip('disable')
    })
    .on('hide.bs.dropdown', function (e) {
      $(e.target).tooltip('enable')
    })

})()