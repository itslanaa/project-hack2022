(function() {
  'use strict';

  function whichTransitionEvent() {
    var t,
        el = document.createElement('fakeelement')

    var transitions = {
      'transition'      : 'transitionend',
      'OTransition'     : 'oTransitionEnd',
      'MozTransition'   : 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

  var transitionEvent = whichTransitionEvent()
  
  ////////////////////////////////////////////////////////
  // Handle overlapping side effects of .dropdown-menu  //
  // having display: block; and visibility: hidden;     //
  ////////////////////////////////////////////////////////

  $('.dropdown')
    .on('show.bs.dropdown', function(e) {
      $(this).find('.dropdown-menu').show()
    })
    .on('hidden.bs.dropdown', function(e, b) {
      const dd = $(this).find('.dropdown-menu')
      dd.one(transitionEvent, function(e) {
        dd.hide()
      })
    })

})()
